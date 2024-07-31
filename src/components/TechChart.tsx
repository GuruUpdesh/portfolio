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
    { browser: "react", visitors: 95, fill: "var(--color-react)" },
    { browser: "python", visitors: 80, fill: "var(--color-python)" },
    { browser: "django", visitors: 70, fill: "var(--color-django)" },
    { browser: "express", visitors: 60, fill: "var(--color-express)" },
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
    python: {
        label: "Python",
        color: "hsl(var(--chart-3))",
    },
    django: {
        label: "Django",
        color: "hsl(var(--chart-4))",
    },
    express: {
        label: "Express",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig;

export function TechChart() {
    return (
        <ChartContainer config={chartConfig} className="aspect-auto h-[150px]">
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
                    tickMargin={5}
                    axisLine={false}
                    tickFormatter={(value) =>
                        chartConfig[value as keyof typeof chartConfig]?.label
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
    );
}

export default TechChart;
