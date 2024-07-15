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

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Username must be at least 1 character.",
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
        }
    }

    if (submitted) {
        return (
            <div className="order-t flex flex-1 flex-col items-center justify-between bg-[#0A0A0A] p-8 sm:border-l sm:border-t-0 md:col-span-2">
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
                                <p>Submit Another Message</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div>
                    <h1 className="text-lg">Thanks for reaching out!</h1>
                    <p className="text-sm opacity-75">
                        I look forward to speaking with you further.
                    </p>
                </div>
                <p className="flex items-center gap-1 text-xs opacity-75">
                    <Info className="h-4 w-4" />
                    You should receive a confirmation email shortly
                </p>
            </div>
        );
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col border-t bg-[#0A0A0A] p-2 sm:border-l sm:border-t-0 md:col-span-2"
            >
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
                            <FormMessage className="ml-2" />
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
                            <FormMessage className="ml-2" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className="mb-2 flex flex-1 flex-col">
                            <FormControl>
                                <Textarea
                                    placeholder="message"
                                    {...field}
                                    className="flex-1 resize-none border-hidden bg-transparent"
                                />
                            </FormControl>
                            <FormMessage className="ml-2" />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    variant="ghost"
                    className="justify-between rounded-bl-[32px] rounded-br-[32px] sm:rounded-bl"
                >
                    {form.formState.isSubmitting ? "Contacting" : "Contact"}
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
