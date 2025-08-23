"use client";

import { EyeIcon } from "@heroicons/react/16/solid";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    feature: "Gold ETF",
    confirm: 120,
    pending: 45,
    cancel: 30,
    max: 150,
  },
  {
    feature: "Mutual Funds",
    confirm: 95,
    pending: 25,
    cancel: 15,
    max: 150,
  },
  {
    feature: "Insurance",
    confirm: 140,
    pending: 35,
    cancel: 20,
    max: 150,
  },
  {
    feature: "FD",
    confirm: 85,
    pending: 40,
    cancel: 25,
    max: 150,
  },
  {
    feature: "Stock",
    confirm: 110,
    pending: 30,
    cancel: 18,
    max: 150,
  },
];

export const UsageRadar = () => {
  return (
    <div className="overflow-hidden rounded border border-stone-300 h-84">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <EyeIcon className="w-7" /> Usage
        </h3>
      </div>

      <div className="h-64 px-4 py-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis className="text-xs font-bold" dataKey="feature" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Confirm"
              dataKey="confirm"
              stroke="#166534"
              fill="#166534"
              fillOpacity={0.2}
            />
            <Radar
              name="Pending"
              dataKey="pending"
              stroke="#ca8a04"
              fill="#ca8a04"
              fillOpacity={0.2}
            />
            <Radar
              name="Cancel"
              dataKey="cancel"
              stroke="#dc2626"
              fill="#dc2626"
              fillOpacity={0.2}
            />
            <Tooltip
              wrapperClassName="text-sm rounded"
              labelClassName="text-xs text-stone-500"
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
