import Mysheet from "@/components/shared/my-sheet";
import { DataTable } from "@/components/shared/table/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import TeamForm from "./form/team-form";
import useTeam from "./form/use-team";
import { teamColumns } from "./table/column";
import TeamToolbar from "./table/toolbar";

const Teams = () => {
  const { teamDatas, handlePageChange, handleSizeChange } = useTeam();
  const [open, setOpen] = useState(false);
  const AddTeam = (
    <Mysheet
      open={open}
      setOpen={setOpen}
      openButton={<Button>Add Team</Button>}
    >
      <div className="p-6">
        <div className="text-lg leading-none font-semibold mb-4">Add Team</div>
        <TeamForm onDialogClose={() => setOpen(false)} />
      </div>
    </Mysheet>
  );

  return (
    <div className="border-1 rounded-md p-3">
      <TeamToolbar column={teamColumns} title="Teams" button={AddTeam} />
      <DataTable
        columns={teamColumns}
        data={teamDatas?.data.data ?? []}
        pagination={teamDatas?.data}
        handlePageChange={handlePageChange}
        handleSizeChange={handleSizeChange}
      />
    </div>
  );
};

export default Teams;
