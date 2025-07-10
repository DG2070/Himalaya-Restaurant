import Mysheet from "@/components/shared/my-sheet";
import { DataTable } from "@/components/shared/table/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ClientForm from "./form/client-form";
import useClient from "./form/use-client";
import { clientColumns } from "./table/column";
import Toolbar from "./table/toolbar";
const Client = () => {
  const { clientDatas, handlePageChange, handleSizeChange } = useClient();
  const [open, setOpen] = useState(false);
  const AddClient = (
    <Mysheet
      open={open}
      setOpen={setOpen}
      openButton={<Button>Add Client</Button>}
    >
      <div className="p-6">
        <div className="text-lg leading-none font-semibold mb-4">
          Add Client
        </div>
        <ClientForm onDialogClose={() => setOpen(false)} />
      </div>
    </Mysheet>
  );
  return (
    <div className="border-1 rounded-md p-3">
      <Toolbar column={clientColumns} title="Clients" button={AddClient} />
      <DataTable
        columns={clientColumns}
        data={clientDatas?.data?.data ?? []}
        pagination={clientDatas?.data}
        handlePageChange={handlePageChange}
        handleSizeChange={handleSizeChange}
      />
    </div>
  );
};

export default Client;
