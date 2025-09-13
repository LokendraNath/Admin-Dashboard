import {
  Cog6ToothIcon,
  EllipsisHorizontalIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

export const Settings = () => {
  return (
    <div className="bg-white dark:bg-[#1D202B] rounded-lg shadow-2xl min-h-full">
      <div className="p-6 border-b border-stone-200 dark:border-stone-700">
        <div className="flex justify-between items-center">
          <h3 className="flex text-xl font-semibold items-center space-x-3 text-stone-800 dark:text-stone-200">
            <Cog6ToothIcon className="w-6 text-stone-600 dark:text-stone-200" />
            <span>Application Settings</span>
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
              setting="Dark Mode"
              desc="Enable dark theme"
              status="Enabled"
              order={1}
            />
            <TableRow
              setting="Notifications"
              desc="Allow system alerts"
              status="Disabled"
              order={2}
            />
            <TableRow
              setting="2FA Security"
              desc="Enable 2-factor login"
              status="Enabled"
              order={3}
            />
            <TableRow
              setting="Auto Backup"
              desc="Daily backup at 12 AM"
              status="Enabled"
              order={4}
            />
            <TableRow
              setting="Beta Features"
              desc="Access new experimental tools"
              status="Disabled"
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
        <th className="text-start p-3">Setting</th>
        <th className="text-start p-3">Description</th>
        <th className="text-start p-3">Status</th>
        <th className="w-12"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({
  setting,
  desc,
  status,
  order,
}: {
  setting: string;
  desc: string;
  status: string;
  order: number;
}) => {
  const statusIcon =
    status === "Enabled" ? (
      <CheckCircleIcon className="w-5 text-green-600 dark:text-green-400" />
    ) : (
      <XCircleIcon className="w-5 text-red-600 dark:text-red-400" />
    );

  return (
    <tr
      className={`text-sm transition-colors ${
        order % 2
          ? "bg-stone-50 dark:bg-[#232530]"
          : "bg-white dark:bg-[#1D202B]"
      } hover:bg-stone-50 dark:hover:bg-[#2A2F3D]`}
    >
      <td className="p-3 font-medium text-stone-800 dark:text-stone-200">
        {setting}
      </td>
      <td className="p-3 text-stone-600 dark:text-stone-400">{desc}</td>
      <td className="p-3 flex items-center gap-2 font-semibold">
        {statusIcon}
        <span
          className={
            status === "Enabled"
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }
        >
          {status}
        </span>
      </td>
      <td className="w-12">
        <button className="transition-colors grid place-content-center rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-[#343A46] hover:text-stone-700 dark:hover:text-stone-200 size-8">
          <EllipsisHorizontalIcon className="w-5" />
        </button>
      </td>
    </tr>
  );
};
