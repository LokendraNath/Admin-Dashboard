import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/16/solid";
import React from "react";

export const Stats = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <Cards
        title="Gross Revenue"
        value="120,054,24"
        pillText="2.754"
        treand="up"
        period="From Jan 1st - Jul 31st"
      />
      <Cards
        title="Average Order"
        value="27.97"
        pillText="1.02"
        treand="down"
        period="From Jan 1st - Jul 31st"
      />
      <Cards
        title="Trailing Year"
        value="254,545.34"
        pillText="45.434"
        treand="up"
        period="From Jan 1st - Jul 31st"
      />
    </div>
  );
};

type CardProps = {
  title: string;
  value: string;
  pillText: string;
  treand: "up" | "down";
  period: string;
};

const Cards = ({ title, value, pillText, treand, period }: CardProps) => {
  return (
    <div className="p-4 col-span-4 rounded-lg border border-stone-300">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-sm mb-2 text-stone-800">{title}</h3>
          <p className="text-3xl font-semibold">
            <span className="text-2xl mr-1">$</span>
            {value}
          </p>
        </div>
        <span
          className={`flex gap-2 border px-2 rounded-lg py-0.5 ${
            treand === "up"
              ? "bg-green-200 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {treand === "up" ? (
            <ArrowTrendingUpIcon className="w-4" />
          ) : (
            <ArrowTrendingDownIcon className="w-4" />
          )}
          {pillText}%
        </span>
      </div>
      <p className="text-sm text-stone-500">{period}</p>
    </div>
  );
};
