"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface PvGraphProps {
  pvData: { date: string; pv: number }[];
}

export const PvGraph = ({ pvData }: PvGraphProps) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
    >
      <LineChart data={pvData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#b43353"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
