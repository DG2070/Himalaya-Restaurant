import { Clock, Mail, Paperclip } from "lucide-react";
import DashBoardCard from "./dashboard-card";
import JobTableView from "./job-application-table-view";
import { MessageCard } from "./message-card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const dashBoardValue = [
  {
    label: "Total Job Application",
    value: "45",
    description: "12% from last month",
    icon: <Paperclip />,
  },
  {
    label: "New Message",
    value: "28",
    description: "8% from last month",
    icon: <Mail />,
  },
  {
    label: "Upcoming Deadline",
    value: "5",
    description: "2 urgent deadline",
    icon: <Clock />,
  },
];

export const msgData = [
  {
    fullName: "Emily Carter",
    email: "emily.carter@example.com",
    subject: "Inquiry About Job Opening",
    message:
      "Hi, I'm interested in the open frontend developer role. Could you please provide more details about the position?",
    date: "2025-04-18T13:45:00Z",
  },
  {
    fullName: "David Ramirez",
    email: "david.ramirez@example.com",
    subject: "Follow-Up on Interview",
    message:
      "Thank you for the opportunity to interview. I wanted to follow up and see if there are any updates regarding my application.",
    date: "2025-04-17T16:30:00Z",
  },
  {
    fullName: "Sarah Kim",
    email: "sarah.kim@example.com",
    message:
      "Hello, I'm having trouble uploading my resume on the application form. Can someone assist me?",
    date: "2025-04-18T08:20:00Z",
  },
];

const Dashboard = () => {
  return (
    <div>
      <div className="text-primary font-[600] text-lg mb-4">Dashbaord</div>
      <div className="h-[80dvh] overflow-scroll">
        <div className="flex justify-between  gap-2 flex-wrap">
          {dashBoardValue.map((d) => (
            <DashBoardCard
              label={d.label}
              value={d.value}
              icon={d.icon}
              description={d.description}
            />
          ))}
        </div>
        <div className="border-1 rounded-md p-3 my-4">
          <div className="flex items-center justify-between mb-8">
            <div className="text-primary font-[600]">
              Recent Job Applications
            </div>
            <Button>View All Applications</Button>
          </div>
          <JobTableView />
        </div>
        <div className="border-1 rounded-md p-3">
          <div className="flex items-center justify-between mb-8">
            <div className="text-primary font-[600]">Recent Messages</div>
            <Link to="/contact">
              <Button>View All Messages</Button>
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {msgData.map((msg) => (
              <MessageCard {...msg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
