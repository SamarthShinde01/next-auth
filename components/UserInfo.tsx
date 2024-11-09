import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function UserInfo() {
	const session = await getServerSession(authOptions);

	return (
		<div className="flex justify-center items-center ">
			<Card className="w-6/12 mt-10 ">
				<CardHeader className="text-center text-3xl">
					<CardTitle>Welcome {session?.user?.name?.split(" ")[0]}</CardTitle>
					<CardDescription>You are logged in</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col justify-center  items-center my-10">
					<p>{session?.user?.name}</p>
					<p>{session?.user?.email}</p>
				</CardContent>
			</Card>
		</div>
	);
}
