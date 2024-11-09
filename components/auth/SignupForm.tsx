"use client";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

const FormSchema = z
	.object({
		name: z.string().min(1, { message: "Full Name is required" }),
		phone: z
			.string()
			.min(10, { message: "Phone number must be exactly 10 digits." })
			.max(10, { message: "Phone number must be exactly 10 digits." })
			.regex(/^\d+$/, { message: "Phone number must only contain digits." }),
		username: z
			.string()
			.min(1, {
				message: "Username is required.",
			})
			.email({ message: "Email is required" }),
		password: z.string().min(1, { message: "Password is required" }),
		confirm_password: z
			.string()
			.min(1, { message: "Confirm Password is required" }),
	})
	.refine((data) => data.password === data.confirm_password, {
		message: "Password and confirm password must match.",
		path: ["confirm_password"],
	});

export default function SignupForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: "",
			password: "",
			confirm_password: "",
			name: "",
			phone: "",
		},
	});

	function submitHandler(data: z.infer<typeof FormSchema>) {
		console.log(data);
	}

	return (
		<Card className="w-[800px]">
			<CardHeader className="text-2xl font-bold text-center">
				<CardTitle>Sign Up</CardTitle>
			</CardHeader>
			<CardContent className="space-y-2">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(submitHandler)}
						className="space-y-6"
					>
						<div className=" grid grid-cols-2 gap-y-6 gap-x-3 mb-5">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="uppercase text-xs font-bold text-zinc-500 ">
											Full Name
										</FormLabel>
										<FormControl>
											<Input
												type="text"
												className="border-0 bg-slate-100 text-black"
												placeholder="Samarth Surendra Shinde"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="uppercase text-xs font-bold text-zinc-500 ">
											Phone Number
										</FormLabel>
										<FormControl>
											<Input
												type="text"
												className="border-0 bg-slate-100 text-black"
												placeholder="9898989898"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
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
												type="text"
												className="border-0 bg-slate-100 text-black"
												placeholder="******"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="confirm_password"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="uppercase text-xs font-bold text-zinc-500 ">
											Confirm Password
										</FormLabel>
										<FormControl>
											<Input
												type="text"
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
				<p className="mr-1">Already registered ?</p>
				<Link href="/auth/signin" className="underline hover:text-blue-700">
					Sign In
				</Link>
			</CardFooter>
		</Card>
	);
}
