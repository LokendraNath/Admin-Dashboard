import {
  ArrowUpRightIcon,
  BanknotesIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/16/solid";

export const Transactions = () => {
  return (
    <div className="rounded-lg shadow-2xl min-h-full">
      <div className="p-6 border-b border-stone-200">
        <div className="flex justify-between items-center">
          <h3 className="flex text-xl font-semibold items-center space-x-3">
            <BanknotesIcon className="w-6" />
            <span>Transaction History</span>
          </h3>
          <button className="bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-lg text-stone-700 font-medium transition-colors dark:bg-gradient-to-r dark:from-violet-600 dark:to-indigo-600 dark:text-stone-200">
            See All
          </button>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-[#1D202B]">
        <table className="w-full table-auto">
          <TableHead />
          <tbody className="bg-white dark:bg-[#292D32] rounded-xl">
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
            <TableRow
              cusId="#1304"
              sku="Pro 3 Month"
              date="Jul 31st"
              price="$22.02"
              order={6}
            />
            <TableRow
              cusId="#1304"
              sku="Pro 3 Month"
              date="Jul 31st"
              price="$22.02"
              order={6}
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
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-semibold text-stone-600 dark:text-stone-200 border-b border-stone-200">
        <th className="text-start p-3">Customer ID</th>
        <th className="text-start p-3">SKU</th>
        <th className="text-start p-3">Date</th>
        <th className="text-start p-3">Price</th>
        <th className="w-12"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({
  cusId,
  sku,
  date,
  price,
  order,
}: {
  cusId: string;
  sku: string;
  date: string;
  price: string;
  order: number;
}) => {
  return (
    <tr
      className={`text-sm hover:bg-stone-50 transition-colors 
        bg-stone-50 dark:bg-[#292D32] text-black dark:text-stone-200
      `}
    >
      <td className="p-3">
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 underline flex items-center gap-1 font-medium"
        >
          {cusId} <ArrowUpRightIcon className="w-4" />
        </a>
      </td>
      <td className="p-3 text-stone-700 dark:text-stone-200">{sku}</td>
      <td className="p-3 text-stone-600 dark:text-stone-200">{date}</td>
      <td className="p-3 font-semibold text-green-600">{price}</td>
      <td className="w-12">
        <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded-lg text-stone-500 hover:text-stone-700 size-8 dark:text-stone-200">
          <EllipsisHorizontalIcon className="w-5" />
        </button>
      </td>
    </tr>
  );
};
