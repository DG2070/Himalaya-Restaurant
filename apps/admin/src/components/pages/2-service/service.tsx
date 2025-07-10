import { Button } from "@/components/ui/button";

import Mysheet from "@/components/shared/my-sheet";
import { DataTable } from "@/components/shared/table/table";
import { useState } from "react";
import AddServiceDialog from "./form/service-form";
import useService from "./form/use-service";
import { serviceColumns } from "./table/column";
import TeamToolbar from "./table/toolbar";

const Service = () => {
  const { serviceDatas, handlePageChange, handleSizeChange } = useService();
  const [open, setOpen] = useState(false);
  const AddService = (
    <Mysheet
      open={open}
      setOpen={setOpen}
      openButton={<Button>Add Service</Button>}
    >
      <div className="p-6">
        <div className="text-lg leading-none font-semibold mb-4">
          Add Services
        </div>
        <AddServiceDialog onDialogClose={() => setOpen(false)} />
      </div>
    </Mysheet>
  );

  return (
    <div className="border-1 rounded-md p-3">
      <TeamToolbar
        column={serviceColumns}
        title="Services"
        button={AddService}
      />
      <DataTable
        columns={serviceColumns}
        data={serviceDatas?.data.data ?? []}
        pagination={serviceDatas?.data}
        handlePageChange={handlePageChange}
        handleSizeChange={handleSizeChange}
      />
    </div>
  );
};

export default Service;
