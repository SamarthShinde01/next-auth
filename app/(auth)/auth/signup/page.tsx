"use client";
import SignupForm from "@/components/auth/SignupForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignUp() {
	const router = useRouter();
	const { data: session, status } = useSession();

	useEffect(() => {
		if (status === "authenticated") {
			router.push("/");
		}
	}, [session, status, router]);

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	return (
		<>
			<SignupForm />
		</>
	);
}
