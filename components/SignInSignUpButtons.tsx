"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function SignInSignUpButtons() {
	const router = useRouter();
	return (
		<div className="flex justify-center items-center ">
			<Card className="w-6/12 mt-10 ">
				<CardHeader className="text-center text-3xl">
					<CardTitle>Welcome</CardTitle>
					<CardDescription>You are not logged in</CardDescription>
				</CardHeader>
				<CardContent className="flex justify-center items-center gap-5 my-10">
					<Button
						className="w-40 bg-slate-900 hover:bg-slate-700"
						onClick={() => router.push("/auth/signin")}
					>
						Sign In
					</Button>
					<Button
						className="w-40 bg-slate-900 hover:bg-slate-700"
						onClick={() => router.push("/auth/signup")}
					>
						Sign Up
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
