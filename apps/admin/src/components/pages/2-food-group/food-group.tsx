import Mysheet from "@/components/shared/my-sheet";
import { DataTable } from "@/components/shared/table/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FoodGroupForm from "./form/food-group-form";
import useFoodGroup from "./form/use-food-group";
import { foodGroupColumns } from "./table/column";
import FoodGroupToolbar from "./table/toolbar";
function FoodGroupPage() {
  const { foodGroupDatas, handlePageChange, handleSizeChange } =
    useFoodGroup();
  const [open, setOpen] = useState(false);
  const AddFoodGroup = (
    <Mysheet
      open={open}
      setOpen={setOpen}
      openButton={<Button>Add FoodGroup</Button>}
    >
      <div className="p-6">
        <div className="text-lg leading-none font-semibold mb-4">
          Add FoodGroup
        </div>
        <FoodGroupForm onDialogClose={() => setOpen(false)} />
      </div>
    </Mysheet>
  );
  return (
    <div className="border-1 rounded-md p-3">
      <FoodGroupToolbar
        column={foodGroupColumns}
        title="FoodGroups"
        button={AddFoodGroup}
      />
      <DataTable
        columns={foodGroupColumns}
        data={foodGroupDatas?.data.data ?? []}
        handlePageChange={handlePageChange}
        handleSizeChange={handleSizeChange}
        pagination={foodGroupDatas?.data}
      />
    </div>
  );
}

export default FoodGroupPage;
