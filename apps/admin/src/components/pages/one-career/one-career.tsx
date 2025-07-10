import { DataTable } from "@/components/shared/table/table";

import Toolbar from "./table/toolbar";
import useApplication from "./form/use-application";
import { getRouteApi } from "@tanstack/react-router";
import { applicationColumns } from "./table/column";
export default function OneCareer() {
  const route = getRouteApi("/_admin/career-apllication/$id");
  const { id } = route.useParams();
  const { applicationDatas, handlePageChange, handleSizeChange } =
    useApplication(undefined, id);
  return (
    <div className="border-1 rounded-md p-3">
      <Toolbar column={applicationColumns} title="Applications" />
      <DataTable
        columns={applicationColumns}
        data={applicationDatas?.data.data ?? []}
        handlePageChange={handlePageChange}
        handleSizeChange={handleSizeChange}
        pagination={applicationDatas?.data}
      />
    </div>
  );
}
