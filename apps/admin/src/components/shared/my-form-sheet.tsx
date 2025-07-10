import type React from "react";
import { Button } from "../ui/button";

const MyFormSheet = ({
  children,
  mutationName,
  formToEditId,
  formName,
}: {
  children: React.ReactNode;
  mutationName: any;
  formToEditId?: string;
  formName: string;
}) => {
  return (
    <div>
      <div className="h-[80dvh] overflow-x-scroll mt-4  flex flex-col gap-4">
        {children}
      </div>
      <div className="flex w-full  justify-end mt-1 pt-2 border-t-2 ">
        <Button type="submit" disabled={mutationName.isPending}>
          {mutationName.isPending
            ? formToEditId
              ? `Updating`
              : "saving..."
            : formToEditId
              ? "Update " + formName
              : "Save " + formName}
        </Button>
      </div>
    </div>
  );
};

export default MyFormSheet;
