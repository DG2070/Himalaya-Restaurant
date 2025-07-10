import useTestimonial from "./form/use-testimonial";
import { testimonialColumns } from "./table/column";

import Mysheet from "@/components/shared/my-sheet";
import { DataTable } from "@/components/shared/table/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import TestimonialForm from "./form/testimonial-form";
import TeamToolbar from "./table/toolbar";

const TestimonialPage = () => {
  const { testimonialDatas, handlePageChange, handleSizeChange } =
    useTestimonial();
  const [open, setOpen] = useState(false);
  const AddTestimonial = (
    <Mysheet
      open={open}
      setOpen={setOpen}
      openButton={<Button>Add Testimonial</Button>}
    >
      <div className="p-6">
        <div className="text-lg leading-none font-semibold mb-4">
          Add Testimonial
        </div>
        <TestimonialForm onDialogClose={() => setOpen(false)} />
      </div>
    </Mysheet>
  );

  return (
    <div className="border-1 rounded-md p-3">
      <TeamToolbar
        column={testimonialColumns}
        title="Testimonial"
        button={AddTestimonial}
      />
      <DataTable
        columns={testimonialColumns}
        data={testimonialDatas?.data.data ?? []}
        handlePageChange={handlePageChange}
        handleSizeChange={handleSizeChange}
        pagination={testimonialDatas?.data}
      />
    </div>
  );
};

export default TestimonialPage;
