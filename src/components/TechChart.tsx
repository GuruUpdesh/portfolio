"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
    { browser: "next", visitors: 100, fill: "var(--color-next)" },
    { browser: "react", visitors: 90, fill: "var(--color-react)" },
    { browser: "firefox", visitors: 80, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 70, fill: "var(--color-edge)" },
    { browser: "other", visitors: 60, fill: "var(--color-other)" },
];

const chartConfig = {
    visitors: {
        label: "Familiarity",
    },
    next: {
        label: "Next.JS",
        color: "hsl(var(--chart-1))",
    },
    react: {
        label: "React",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig;

export function TechChart() {
    return (
        <>
            <CardHeader>
                <CardTitle>My Technology</CardTitle>
                <CardDescription>
                    I use a variety of technologies and platforms to deliver on
                    features and requirements.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            left: 0,
                        }}
                    >
                        <YAxis
                            dataKey="browser"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) =>
                                chartConfig[value as keyof typeof chartConfig]
                                    ?.label
                            }
                        />
                        <XAxis dataKey="visitors" type="number" hide />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="visitors" layout="vertical" radius={5} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </>
    );
}

export default TechChart;
