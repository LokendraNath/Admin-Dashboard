import {
  ArrowUpRightIcon,
  BanknotesIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/16/solid";
import React from "react";

export const RecentTransaction = () => {
  return (
    <div className="p-4 rounded-lg border  border-stone-300">
      <div className="flex justify-between ">
        <h3 className="flex text-lg items-center space-x-3">
          <BanknotesIcon className="w-6" />
          <span className="text-lg">Transecation</span>
        </h3>
        <button className="bg-stone-100 px-3 rounded-lg">See All</button>
      </div>
      <table className="w-full table-auto">
        <TableHead />
        <tbody>
          <TableRow
            cusId="#48149"
            sku="Pro 1 Month"
            date="Aug 2nd"
            price="$9.75"
            order={1}
          />
          <TableRow
            cusId="#1942s"
            sku="Pro 3 Month"
            date="Aug 2nd"
            price="$21.25"
            order={2}
          />
          <TableRow
            cusId="#4192"
            sku="Pro 1 Year"
            date="Aug 1st"
            price="$94.75"
            order={3}
          />
          <TableRow
            cusId="#99481"
            sku="Pro 1 Month"
            date="Aug 1st"
            price="$9.44"
            order={4}
          />
          <TableRow
            cusId="#1304"
            sku="Pro 1 Month"
            date="Aug 1st"
            price="$9.23"
            order={5}
          />
          <TableRow
            cusId="#1304"
            sku="Pro 3 Month"
            date="Jul 31st"
            price="$22.02"
            order={6}
          />
        </tbody>
      </table>
    </div>
  );
};
const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1.5">Customer ID</th>
        <th className="text-start p-1.5">SKU</th>
        <th className="text-start p-1.5">Date</th>
        <th className="text-start p-1.5">Price</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};
const TableRow = ({ cusId, sku, date, price, order }) => {
  return (
    <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
      <td className="p-1.5">
        <a
          href="#"
          className="text-violet-600 underline flex items-center gap-1"
        >
          {cusId} <ArrowUpRightIcon className="w-6" />
        </a>
      </td>
      <td className="p-1.5">{sku}</td>
      <td className="p-1.5">{date}</td>
      <td className="p-1.5">{price}</td>
      <td className="w-8">
        <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
          <EllipsisHorizontalIcon className="w-5" />
        </button>
      </td>
    </tr>
  );
};
