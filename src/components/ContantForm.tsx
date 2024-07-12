"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { sendEmail } from "@/actions/EmailActions";

const formSchema = z.object({
	name: z.string().min(1, {
		message: "Username must be at least 1 character.",
	}),
	email: z.string().email({
		message: "Please provide a valid email!",
	}),
	message: z
		.string()
		.min(1, {
			message: "Message must be at least 1 character.",
		})
		.max(10000, {
			message: "Message can't be more than 10,000 characters.",
		}),
});

const ContactForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		sendEmail(values.email);
        form.reset()
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="bg-[#0A0A0A] flex flex-col p-2 border-l">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="name"
									{...field}
									className="border-hidden bg-transparent"
								/>
							</FormControl>
							<FormMessage className="ml-2"/>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder="email"
									{...field}
									className="border-hidden bg-transparent"
								/>
							</FormControl>
							<FormMessage className="ml-2"/>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem className="flex flex-col flex-1 mb-2">
							<FormControl>
								<Textarea
									placeholder="message"
									{...field}
									className="border-hidden resize-none bg-transparent flex-1"
								/>
							</FormControl>
							<FormMessage className="ml-2"/>
						</FormItem>
					)}
				/>
                <Button type="submit" className="rounded-br-[32px] justify-between" disabled={!form.formState.isDirty}>
                    Contact
                    <ArrowRight className="w-4 h-4"/>
                </Button>
			</form>
		</Form>
	);
};

export default ContactForm;
