import Mysheet from "@/components/shared/my-sheet";
import { DataTable } from "@/components/shared/table/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CareerForm from "./form/career-form";
import useCareer from "./form/use-career";
import { careerColumns } from "./table/column";
import TeamToolbar from "./table/toolbar";

const CareerPage = () => {
  const { careerDatas, handlePageChange, handleSizeChange } = useCareer();
  const [open, setOpen] = useState(false);
  const AddCareer = (
    <Mysheet
      open={open}
      setOpen={setOpen}
      openButton={<Button>Add Career</Button>}
    >
      <div className="p-6">
        <div className="text-lg leading-none font-semibold mb-4">
          Add Career
        </div>
        <CareerForm onDialogClose={() => setOpen(false)} />
      </div>
    </Mysheet>
  );
  return (
    <div className="border-1 rounded-md p-3">
      <TeamToolbar column={careerColumns} title="Careers" button={AddCareer} />
      <DataTable
        columns={careerColumns}
        data={careerDatas?.data.data ?? []}
        pagination={careerDatas?.data}
        handlePageChange={handlePageChange}
        handleSizeChange={handleSizeChange}
      />
    </div>
  );
};

export default CareerPage;
