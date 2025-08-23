import React from "react";
import { UserIcon } from "@heroicons/react/16/solid";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Line,
  LineChart,
} from "recharts";

const data = [
  {
    name: "Jan",
    profit: 432,
    loss: 156,
  },
  {
    name: "Feb",
    profit: 567,
    loss: 234,
  },
  {
    name: "Mar",
    profit: 398,
    loss: 187,
  },
  {
    name: "Apr",
    profit: 654,
    loss: 298,
  },
  {
    name: "May",
    profit: 789,
    loss: 345,
  },
  {
    name: "Jun",
    profit: 456,
    loss: 267,
  },
  {
    name: "Jul",
    profit: 678,
    loss: 412,
  },
];

export const ActivityGraph = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-stone-300 h-84">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-semibold">
          <UserIcon className="w-7" />
          Activity
        </h3>
      </div>
      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: -24,
              bottom: 0,
            }}
          >
            <CartesianGrid stroke="#e4e4e7" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              className="text-xs font-bold"
              padding={{ right: 4 }}
            />
            <YAxis
              className="text-xs font-bold"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              wrapperClassName="text-sm rounded"
              labelClassName="text-xs text-stone-500"
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#166534"
              fill="#166534"
            />
            <Line
              type="monotone"
              dataKey="loss"
              stroke="#dc2626"
              fill="#dc2626"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
