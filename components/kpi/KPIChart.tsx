"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { GroupKPI, SELScores } from "@/lib/types";

interface KPIChartProps {
  kpiData: GroupKPI;
}

export default function KPIChart({ kpiData }: KPIChartProps) {
  const kpiNames: (keyof SELScores)[] = ["שייכות", "ויסות רגשי", "עבודת צוות"];

  const chartData = kpiNames.map((name) => ({
    name,
    "לפני": kpiData.before[name],
    "אחרי": kpiData.after[name],
  }));

  return (
    <div style={{ direction: "ltr" }}>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData} barGap={8} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="#D7CCC8" />
          <XAxis
            dataKey="name"
            tick={{ fill: "#4E342E", fontSize: 14, fontFamily: "var(--font-heebo)" }}
            axisLine={{ stroke: "#BCAAA4" }}
          />
          <YAxis
            domain={[0, 5]}
            ticks={[0, 1, 2, 3, 4, 5]}
            tick={{ fill: "#4E342E", fontSize: 12 }}
            axisLine={{ stroke: "#BCAAA4" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#FAF3E0",
              border: "1px solid #D7CCC8",
              borderRadius: "12px",
              fontFamily: "var(--font-heebo)",
            }}
          />
          <Legend
            wrapperStyle={{ fontFamily: "var(--font-heebo)", fontSize: 14 }}
          />
          <Bar
            dataKey="לפני"
            fill="#BCAAA4"
            radius={[8, 8, 0, 0]}
            maxBarSize={60}
          />
          <Bar
            dataKey="אחרי"
            fill="#D84315"
            radius={[8, 8, 0, 0]}
            maxBarSize={60}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
