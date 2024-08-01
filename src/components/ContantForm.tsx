"use client";

import React, { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, Info, Loader2 } from "lucide-react";
import { sendEmail } from "@/actions/EmailActions";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name must be at least 1 character.",
    }),
    email: z.string().email({
        message: "Email must be valid!",
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

    const [submitted, setSubmitted] = useState(false);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        const result = await sendEmail(
            values.name,
            values.email,
            values.message,
        );
        if (result.result) {
            setSubmitted(true);
            form.reset();
            form.clearErrors();
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-8"
            >
                {submitted && (
                    <div
                        id="contact"
                        className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-between p-5 backdrop-blur-3xl"
                    >
                        <div className="w-full">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-full"
                                            onClick={() => setSubmitted(false)}
                                        >
                                            <ArrowLeft className="h-4 w-4" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Submit Another Message
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <div>
                            <h1 className="text-lg">
                                Thanks for reaching out!
                            </h1>
                            <p className="text-sm opacity-75">
                                I look forward to speaking with you further.
                            </p>
                        </div>
                        <p className="flex items-center gap-1 text-xs opacity-75">
                            <Info className="h-4 w-4" />
                            You should receive a confirmation email shortly
                        </p>
                    </div>
                )}
                <div
                    className={cn(
                        "absolute bottom-0 left-0 -z-10 h-[50%] w-full bg-gradient-to-b from-transparent to-[#2aaf70] opacity-0 transition-opacity duration-1000 ease-out-expo",
                        {
                            "opacity-25": form.formState.isValid,
                            "to-[#ff1c02] opacity-25":
                                form.formState.errors &&
                                !form.formState.isValid &&
                                form.formState.isDirty,
                        },
                    )}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="border-b">
                            <FormLabel className="flex items-center gap-2">
                                <p className="rounded-full border px-2 py-0.5 text-xs">
                                    01
                                </p>
                                What&apos;s your name?
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Type your full name"
                                    type="text"
                                    {...field}
                                    className="border-hidden bg-transparent focus-visible:ring-0"
                                    disabled={submitted}
                                />
                            </FormControl>
                            <FormMessage className="ml-2" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="border-b">
                            <FormLabel className="flex items-center gap-2">
                                <p className="rounded-full border px-2 py-0.5 text-xs">
                                    02
                                </p>
                                What&apos;s your email address?
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="example@email.com"
                                    type="email"
                                    {...field}
                                    className="border-hidden bg-transparent focus-visible:ring-0"
                                    disabled={submitted}
                                />
                            </FormControl>
                            <FormMessage className="ml-2" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="flex items-center gap-2">
                                <p className="rounded-full border px-2 py-0.5 text-xs">
                                    03
                                </p>
                                What do you want to talk about?
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="I'm interested in..."
                                    rows={5}
                                    {...field}
                                    className="flex-1 resize-none border-hidden bg-transparent focus-visible:ring-0"
                                    disabled={submitted}
                                />
                            </FormControl>
                            <FormMessage className="ml-2" />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    variant="ghost"
                    className="justify-between rounded-full hover:bg-background"
                    disabled={submitted}
                >
                    {form.formState.isSubmitting ? "Submitting" : "Submit"}
                    {form.formState.isSubmitting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <ArrowRight className="h-4 w-4" />
                    )}
                </Button>
            </form>
        </Form>
    );
};

export default ContactForm;
