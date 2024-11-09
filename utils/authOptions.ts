import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				name: { type: "text", required: true },
				phone: { type: "text", required: true },
				username: { type: "email", required: true },
				password: { type: "password", required: true },
				action: { type: "hidden" },
			},
			async authorize(credentials: any) {
				try {
					if (!credentials) {
						throw new Error("Credentials are required.");
					}

					if (credentials.action === "sign-up") {
						const userExist = await prisma.user.findFirst({
							where: { username: credentials.username },
						});

						if (userExist) {
							throw new Error("User already exist");
						}

						const hashedPassword = await bcrypt.hash(credentials.password, 10);
						const user = await prisma.user.create({
							data: {
								name: credentials.name,
								phone: credentials.phone,
								username: credentials.username,
								password: hashedPassword,
							},
						});

						if (user) {
							return {
								id: JSON.stringify(user.id),
								name: user.name,
								email: user.username,
							};
						} else {
							return null;
						}
					} else {
						const userExist = await prisma.user.findFirst({
							where: { username: credentials.username },
						});

						if (!userExist) {
							throw new Error("User does not exist");
						}

						const passwordValidate = await bcrypt.compare(
							credentials.password,
							userExist.password
						);

						if (passwordValidate) {
							return {
								id: JSON.stringify(userExist.id),
								name: userExist.name,
								email: userExist.username,
							};
						} else {
							return null;
						}
					}
				} catch (error) {
					throw error;
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async session({ session, token }: any) {
			session.user.id = token.sub;

			return session;
		},
	},
};
