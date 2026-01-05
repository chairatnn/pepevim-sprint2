"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { month: "January", clothes: 186, cosmetics: 80 },
  { month: "February", clothes: 305, cosmetics: 200 },
  { month: "March", clothes: 237, cosmetics: 120 },
  { month: "April", clothes: 73, cosmetics: 190 },
  { month: "May", clothes: 209, cosmetics: 130 },
  { month: "June", clothes: 214, cosmetics: 140 },
];

const chartConfig = {
  clothes: {
    label: "clothes",
    color: "#A71B79",
  },
  cosmetics: {
    label: "cosmetics",
    color: "#E0C013",
  },
};

const chartData2 = [
  { browser: "social_media", visitors: 275, fill: "var(--color-social_media)" },
  { browser: "search_engine", visitors: 200, fill: "var(--color-search_engine)" },
  { browser: "content_marketing", visitors: 187, fill: "var(--color-content_marketing)" },
  { browser: "email_marketing", visitors: 173, fill: "var(--color-email_marketing)" },
  { browser: "affiliate", visitors: 90, fill: "var(--color-affiliate)" },
];
const chartConfig2 = {
  visitors: {
    label: "Visitors",
  },
  social_media: {
    label: "social_media",
    color: "var(--chart-1)",
  },
  search_engine: {
    label: "search_engine",
    color: "#5AC8DA",
  },
  content_marketing: {
    label: "content_marketing",
    color: "#A71B79",
  },
  email_marketing: {
    label: "email_marketing",
    color: "#E0C013",
  },
  affiliate: {
    label: "affiliate",
    color: "var(--chart-5)",
  },
};

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

const chartData3 = [
  { month: "January", clothes: 186 },
  { month: "February", clothes: 305 },
  { month: "March", clothes: 237 },
  { month: "April", clothes: 273 },
  { month: "May", clothes: 209 },
  { month: "June", clothes: 214 },
];
const chartConfig3 = {
  clothes: {
    label: "clothes",
    color: "#A71B79",
  },
};

export function DashBoard() {
  return (
    <ChartContainer config={chartConfig} className="min-h-50 w-full">
      <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">
        VELVE' Analysis Dashboard
      </h1>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="clothes" fill="var(--color-clothes)" radius={4} />
        <Bar dataKey="cosmetics" fill="var(--color-cosmetics)" radius={4} />
      </BarChart>

      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Pie Chart - Label List</CardTitle>
          <CardDescription>January - June 2025</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig2}
            className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-62.5]"
          >
            <PieChart>
              <ChartTooltip
                content={<ChartTooltipContent nameKey="visitors" hideLabel />}
              />
              <Pie data={chartData2} dataKey="visitors">
                <LabelList
                  dataKey="browser"
                  className="fill-background"
                  stroke="none"
                  fontSize={14}
                  formatter={(value) => chartConfig2[value]?.label}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground leading-none">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="items-center">
          <CardTitle>Radar Chart - Dots</CardTitle>
          <CardDescription>
            Showing total visitors for the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-0">
          <ChartContainer
            config={chartConfig3}
            className="mx-auto aspect-square max-h-62.5]"
          >
            <RadarChart data={chartData3}>
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <PolarAngleAxis dataKey="month" />
              <PolarGrid />
              <Radar
                dataKey="clothes"
                fill="var(--color-clothes)"
                fillOpacity={0.6}
                dot={{
                  r: 4,
                  fillOpacity: 1,
                }}
              />
            </RadarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none font-medium">
            Trending up by 4.8% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground flex items-center gap-2 leading-none">
            Clothes on January - June 2025
          </div>
        </CardFooter>
      </Card>


    </ChartContainer>
  );
}
export default DashBoard;
