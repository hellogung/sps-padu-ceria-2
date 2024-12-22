import { DataTable } from "@/components/data-table/data-table";
import { APP_NAME } from "@/constant/const";
import { Metadata } from "next";
import { columns, Payment } from "./column";
import { dataUsers } from "./data";
import AddUserComponent from "./add-user";

export const metadata: Metadata = {
  title: `Users | ${APP_NAME}`,
};

const UsersPage = () => {
  const data: Payment[] = dataUsers;

  return (
    <>
      <div className="flex items-between w-full bg-red-500 mb-4">
        <h1 className="text-3xl font-semibold">Daftar Users</h1>
        <AddUserComponent />
      </div>
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default UsersPage;
