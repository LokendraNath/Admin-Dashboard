import {
  ArrowUpRightIcon,
  ShoppingCartIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/16/solid";

export const Orders = () => {
  return (
    <div className="bg-white dark:bg-[#1D202B] rounded-lg shadow-2xl min-h-full">
      <div className="p-6 border-b border-stone-200 dark:border-stone-700">
        <div className="flex justify-between items-center">
          <h3 className="flex text-xl font-semibold items-center space-x-3 text-stone-800 dark:text-stone-200">
            <ShoppingCartIcon className="w-6 text-stone-600 dark:text-stone-300" />
            <span>Orders</span>
          </h3>
          <button className="bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-lg text-stone-700 font-medium transition-colors dark:bg-gradient-to-r dark:from-violet-600 dark:to-indigo-600 dark:text-stone-200">
            View All
          </button>
        </div>
      </div>

      <div className="p-6 overflow-x-auto">
        <table className="w-full table-auto">
          <TableHead />
          <tbody>
            <TableRow
              orderId="#O1001"
              customer="John Doe"
              amount="$120.50"
              status="Completed"
              order={1}
            />
            <TableRow
              orderId="#O1002"
              customer="Sarah Lee"
              amount="$75.20"
              status="Pending"
              order={2}
            />
            <TableRow
              orderId="#O1003"
              customer="David Kim"
              amount="$40.00"
              status="Cancelled"
              order={3}
            />
            <TableRow
              orderId="#O1004"
              customer="Alice Brown"
              amount="$210.00"
              status="Completed"
              order={4}
            />
            <TableRow
              orderId="#O1005"
              customer="Michael Chen"
              amount="$99.99"
              status="Shipped"
              order={5}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-semibold text-stone-600 dark:text-stone-200 border-b border-stone-200 dark:border-stone-700">
        <th className="text-start p-3">Order ID</th>
        <th className="text-start p-3">Customer</th>
        <th className="text-start p-3">Amount</th>
        <th className="text-start p-3">Status</th>
        <th className="w-12"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({
  orderId,
  customer,
  amount,
  status,
  order,
}: {
  orderId: string;
  customer: string;
  amount: string;
  status: string;
  order: number;
}) => {
  const statusColor =
    status === "Completed"
      ? "text-green-600 dark:text-green-400"
      : status === "Pending"
      ? "text-yellow-600 dark:text-yellow-400"
      : status === "Shipped"
      ? "text-blue-600 dark:text-blue-400"
      : "text-red-600 dark:text-red-400";

  return (
    <tr
      className={`text-sm transition-colors 
        ${
          order % 2
            ? "bg-stone-50 dark:bg-[#292D32]"
            : "bg-white dark:bg-[#1F222C]"
        } 
        text-stone-700 dark:text-stone-200 hover:bg-stone-50 dark:hover:bg-[#2F323E]`}
    >
      <td className="p-3">
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 underline dark:text-blue-400 dark:hover:text-blue-500 flex items-center gap-1 font-medium"
        >
          {orderId} <ArrowUpRightIcon className="w-4" />
        </a>
      </td>
      <td className="p-3">{customer}</td>
      <td className="p-3 font-semibold">{amount}</td>
      <td className={`p-3 font-semibold ${statusColor}`}>{status}</td>
      <td className="w-12">
        <button className="hover:bg-stone-200 dark:hover:bg-[#3A3D47] transition-colors grid place-content-center rounded-lg text-stone-500 hover:text-stone-700 dark:text-stone-200 size-8">
          <EllipsisHorizontalIcon className="w-5" />
        </button>
      </td>
    </tr>
  );
};
