"use client";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	username: z
		.string()
		.min(1, {
			message: "Username is required.",
		})
		.email({ message: "Please enter email type" }),
	password: z.string().min(1, {
		message: "Password is required",
	}),
});

export default function SigninForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	function signinHandler(data: z.infer<typeof formSchema>) {
		console.log(data);
	}

	return (
		<Card className="w-[800px]">
			<CardHeader className="text-2xl font-bold text-center">
				<CardTitle>Sign In</CardTitle>
			</CardHeader>
			<CardContent className="space-y-2">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(signinHandler)}
						className="space-y-6"
					>
						<div className="grid grid-cols-2 gap-y-6 gap-x-3 mb-5">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="uppercase text-xs font-bold text-zinc-500 ">
											Username
										</FormLabel>
										<FormControl>
											<Input
												type="text"
												className="border-0 bg-slate-100 text-black"
												placeholder="admin@gmail.com"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="uppercase text-xs font-bold text-zinc-500 ">
											Password
										</FormLabel>
										<FormControl>
											<Input
												type="password"
												className="border-0 bg-slate-100 text-black"
												placeholder="******"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<Button
							className="w-full bg-slate-900 hover:bg-slate-800 "
							type="submit"
						>
							Submit
						</Button>
					</form>
				</Form>
			</CardContent>
			<CardFooter className="text-xs flex justify-center ">
				<p className="mr-1">Have'nt registered yet ?</p>
				<Link href="/auth/signup" className="underline hover:text-blue-700">
					Sign Up
				</Link>
			</CardFooter>
		</Card>
	);
}
