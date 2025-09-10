import {
  ArrowUpRightIcon,
  CubeTransparentIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/16/solid";

export const Inventory = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl min-h-full">
      <div className="p-6 border-b border-stone-200">
        <div className="flex justify-between items-center">
          <h3 className="flex text-xl font-semibold items-center space-x-3 text-stone-800">
            <CubeTransparentIcon className="w-6 text-stone-600" />
            <span>Inventory</span>
          </h3>
          <button className="bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-lg text-stone-700 font-medium transition-colors">
            Manage
          </button>
        </div>
      </div>

      <div className="p-6">
        <table className="w-full table-auto">
          <TableHead />
          <tbody>
            <TableRow
              productId="#P101"
              name="Laptop Pro"
              stock={12}
              status="In Stock"
              order={1}
            />
            <TableRow
              productId="#P102"
              name="Smartphone X"
              stock={5}
              status="Low Stock"
              order={2}
            />
            <TableRow
              productId="#P103"
              name="Wireless Earbuds"
              stock={0}
              status="Out of Stock"
              order={3}
            />
            <TableRow
              productId="#P104"
              name="4K Monitor"
              stock={8}
              status="In Stock"
              order={4}
            />
            <TableRow
              productId="#P105"
              name="Mechanical Keyboard"
              stock={2}
              status="Low Stock"
              order={5}
            />
            <TableRow
              productId="#P106"
              name="Gaming Mouse"
              stock={20}
              status="In Stock"
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
      <tr className="text-sm font-semibold text-stone-600 border-b border-stone-200">
        <th className="text-start p-3">Product ID</th>
        <th className="text-start p-3">Product Name</th>
        <th className="text-start p-3">Stock</th>
        <th className="text-start p-3">Status</th>
        <th className="w-12"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({
  productId,
  name,
  stock,
  status,
  order,
}: {
  productId: string;
  name: string;
  stock: number;
  status: string;
  order: number;
}) => {
  // status ke hisaab se color change
  const statusColor =
    status === "In Stock"
      ? "text-green-600"
      : status === "Low Stock"
      ? "text-yellow-600"
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
          {productId} <ArrowUpRightIcon className="w-4" />
        </a>
      </td>
      <td className="p-3 text-stone-700">{name}</td>
      <td className="p-3 text-stone-600">{stock}</td>
      <td className={`p-3 font-semibold ${statusColor}`}>{status}</td>
      <td className="w-12">
        <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded-lg text-stone-500 hover:text-stone-700 size-8">
          <EllipsisHorizontalIcon className="w-5" />
        </button>
      </td>
    </tr>
  );
};
