import {
  ArrowUpRightIcon,
  ShoppingCartIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/16/solid";

export const Orders = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl min-h-full">
      <div className="p-6 border-b border-stone-200">
        <div className="flex justify-between items-center">
          <h3 className="flex text-xl font-semibold items-center space-x-3 text-stone-800">
            <ShoppingCartIcon className="w-6 text-stone-600" />
            <span>Orders</span>
          </h3>
          <button className="bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-lg text-stone-700 font-medium transition-colors">
            View All
          </button>
        </div>
      </div>

      <div className="p-6">
        <table className="w-full table-auto">
          <TableHead />
          <tbody>
            <TableRow
              orderId="#O1001"
              customer="John Doe"
              date="Sep 9th"
              amount="$120.50"
              status="Completed"
              order={1}
            />
            <TableRow
              orderId="#O1002"
              customer="Sarah Lee"
              date="Sep 9th"
              amount="$75.20"
              status="Pending"
              order={2}
            />
            <TableRow
              orderId="#O1003"
              customer="David Kim"
              date="Sep 8th"
              amount="$40.00"
              status="Cancelled"
              order={3}
            />
            <TableRow
              orderId="#O1004"
              customer="Alice Brown"
              date="Sep 8th"
              amount="$210.00"
              status="Completed"
              order={4}
            />
            <TableRow
              orderId="#O1005"
              customer="Michael Chen"
              date="Sep 7th"
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
      <tr className="text-sm font-semibold text-stone-600 border-b border-stone-200">
        <th className="text-start p-3">Order ID</th>
        <th className="text-start p-3">Customer</th>
        <th className="text-start p-3">Date</th>
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
  date,
  amount,
  status,
  order,
}: {
  orderId: string;
  customer: string;
  date: string;
  amount: string;
  status: string;
  order: number;
}) => {
  const statusColor =
    status === "Completed"
      ? "text-green-600"
      : status === "Pending"
      ? "text-yellow-600"
      : status === "Shipped"
      ? "text-blue-600"
      : "text-red-600";

  return (
    <tr
      className={`text-sm hover:bg-stone-50 transition-colors ${
        order % 2 ? "bg-stone-50" : "bg-white"
      }`}
    >
      <td className="p-3">
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 underline flex items-center gap-1 font-medium"
        >
          {orderId} <ArrowUpRightIcon className="w-4" />
        </a>
      </td>
      <td className="p-3 text-stone-700">{customer}</td>
      <td className="p-3 text-stone-600">{date}</td>
      <td className="p-3 font-semibold text-stone-800">{amount}</td>
      <td className={`p-3 font-semibold ${statusColor}`}>{status}</td>
      <td className="w-12">
        <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded-lg text-stone-500 hover:text-stone-700 size-8">
          <EllipsisHorizontalIcon className="w-5" />
        </button>
      </td>
    </tr>
  );
};
