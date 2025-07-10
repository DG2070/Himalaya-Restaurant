import { msgData } from "../1-dashboard/dashboard";
import { MessageCard } from "../1-dashboard/message-card";

const ContactPage = () => {
  return (
    <div className="border-1 rounded-md p-3">
      <div className="flex items-center justify-between mb-8">
        <div className="text-primary font-[600]">ALL Messages</div>
        {/* <Link to="/contact">
            <Button>View All Messages</Button>
          </Link> */}
      </div>
      <div className="flex flex-col gap-2">
        {msgData.map((msg) => (
          <MessageCard {...msg} />
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
