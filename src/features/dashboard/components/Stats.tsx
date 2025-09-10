import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/16/solid";
import React from "react";

export const Stats = () => {
  return (
    <div className="grid grid-cols-12 gap-1 md:gap-4">
      {/* Gross Revenue */}
      <Cards
        title="Gross Revenue"
        value="1,200,89"
        pillText="2.754"
        treand="up"
        period="From Jan 1st - Jul 31st"
        className="col-span-12 md:col-span-4"
      />

      {/* Avg Order */}
      <Cards
        title="Avg Order"
        value="27.97"
        pillText="1.02"
        treand="down"
        period="From Jan 1st - Jul 31st"
        className="col-span-6 md:col-span-4"
      />

      {/* Third Card */}
      <Cards
        title="Orders"
        value="3,452"
        pillText="45.434"
        treand="up"
        period="From Jan 1st - Jul 31st"
        className="col-span-6 md:col-span-4"
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
  className?: string;
};

const Cards = ({
  title,
  value,
  pillText,
  treand,
  period,
  className,
}: CardProps) => {
  return (
    <div
      className={`p-2 md:p-4 rounded-lg border border-stone-300 ${className}`}
    >
      <div className="flex items-start justify-between md:mb-3">
        <div>
          <h3 className="text-[12px] md:text-sm md:mb-2 text-stone-800">
            {title}
          </h3>
          <p className="text-lg md:text-3xl font-semibold">
            <span className="text-lg md:text-2xl mr-1">$</span>
            {value}
          </p>
        </div>
        <span
          className={`flex gap-1 md:border md:px-2 rounded-lg py-0.5 ${
            treand === "up"
              ? "md:bg-green-200 text-green-800"
              : "md:bg-red-100 text-red-800"
          }`}
        >
          {treand === "up" ? (
            <ArrowTrendingUpIcon className="w-[12px] lg:w-4" />
          ) : (
            <ArrowTrendingDownIcon className="w-4" />
          )}
          <p className="hidden md:block">{pillText}%</p>
        </span>
      </div>
      <p className="text-[10px] md:text-[14px] text-stone-500">{period}</p>
    </div>
  );
};
