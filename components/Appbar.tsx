"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function Appbar() {
	const { data: session } = useSession();
	const router = useRouter();
	return (
		<div className="p-2 bg-slate-900 flex justify-between">
			<Avatar className="w-10 h-10" onClick={() => router.push("/")}>
				<AvatarImage src="https://github.com/shadcn.png" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>

			{session && (
				<Button
					onClick={() => signOut()}
					variant="secondary"
					className="text-slate-50 bg-slate-700 hover:bg-slate-600 hover:text-slate-50 "
				>
					Logout
				</Button>
			)}
		</div>
	);
}
