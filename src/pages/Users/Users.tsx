import {
  ArrowUpRightIcon,
  UserCircleIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

export const Users = () => {
  return (
    <div className="bg-white dark:bg-[#1D202B] rounded-lg shadow-2xl min-h-full">
      <div className="p-6 border-b border-stone-200 dark:border-stone-700">
        <div className="flex justify-between items-center">
          <h3 className="flex text-xl font-semibold items-center space-x-3 text-stone-800 dark:text-stone-200">
            <UserCircleIcon className="w-6 text-stone-600 dark:text-stone-200" />
            <span>Users</span>
          </h3>
          <button className="bg-stone-100 dark:bg-[#2A2F3D] hover:bg-stone-200 dark:hover:bg-[#343A46] px-4 py-2 rounded-lg text-stone-700 dark:text-stone-200 font-medium transition-colors">
            Manage
          </button>
        </div>
      </div>

      <div className="p-6">
        <table className="w-full table-auto">
          <TableHead />
          <tbody>
            <TableRow
              userId="#U1001"
              name="John Doe"
              role="Admin"
              status="Active"
              order={1}
            />
            <TableRow
              userId="#U1002"
              name="Sarah Lee"
              role="Manager"
              status="Inactive"
              order={2}
            />
            <TableRow
              userId="#U1003"
              name="David Kim"
              role="Staff"
              status="Active"
              order={3}
            />
            <TableRow
              userId="#U1004"
              name="Alice Brown"
              role="Admin"
              status="Active"
              order={4}
            />
            <TableRow
              userId="#U1005"
              name="Michael Chen"
              role="Staff"
              status="Inactive"
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
      <tr className="text-sm font-semibold text-stone-600 dark:text-stone-300 border-b border-stone-200 dark:border-stone-700">
        <th className="text-start p-3">User ID</th>
        <th className="text-start p-3">Name</th>
        <th className="text-start p-3">Role</th>
        <th className="text-start p-3">Status</th>
        <th className="w-12"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({
  userId,
  name,
  role,
  status,
  order,
}: {
  userId: string;
  name: string;
  role: string;
  status: string;
  order: number;
}) => {
  const statusColor =
    status === "Active"
      ? "text-green-600 dark:text-green-400"
      : "text-red-600 dark:text-red-400";

  return (
    <tr
      className={`text-sm transition-colors ${
        order % 2
          ? "bg-stone-50 dark:bg-[#232530]"
          : "bg-white dark:bg-[#1D202B]"
      } hover:bg-stone-50 dark:hover:bg-[#2A2F3D]`}
    >
      <td className="p-3">
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline flex items-center gap-1 font-medium"
        >
          {userId} <ArrowUpRightIcon className="w-4" />
        </a>
      </td>
      <td className="p-3 text-stone-700 dark:text-stone-300">{name}</td>
      <td className="p-3 font-semibold text-stone-800 dark:text-stone-200">
        {role}
      </td>
      <td className={`p-3 font-semibold ${statusColor}`}>{status}</td>
      <td className="w-12">
        <button className="transition-colors grid place-content-center rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-[#343A46] hover:text-stone-700 dark:hover:text-stone-200 size-8">
          <EllipsisHorizontalIcon className="w-5" />
        </button>
      </td>
    </tr>
  );
};
