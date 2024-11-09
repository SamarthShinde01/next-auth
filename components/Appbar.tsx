"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

export default function Appbar() {
	const router = useRouter();
	return (
		<div className="p-2 bg-slate-900 flex justify-between">
			<Avatar className="w-10 h-10" onClick={() => router.push("/")}>
				<AvatarImage src="https://github.com/shadcn.png" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</div>
	);
}
