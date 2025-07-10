import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dialog } from "@radix-ui/react-dialog";
import moment from "moment";
import React, { useState } from "react";

interface MessageCardProps {
  fullName: string;
  email: string;
  subject?: string;
  message: string;
  date: string;
}

export const MessageCard: React.FC<MessageCardProps> = ({
  fullName,
  email,
  subject,
  message,
  date,
}) => {
  const firstLetter = fullName.charAt(0);
  const [open, setOpen] = useState(false);
  const [replyContent, setReplyContent] = useState("");

  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4 w-full">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary font-semibold text-lg">
            {firstLetter}
          </div>

          <div className="flex-1 w-full ">
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-medium text-primary">{fullName}</h3>
            </div>

            <p className="text-gray-600 text-sm mb-1">{email}</p>

            {subject && (
              <h4 className="text-primary font-medium mt-2">{subject}</h4>
            )}

            <p className="text-gray-700 mt-1 mb-2">{message}</p>

            <div className="flex justify-between items-center mt-3">
              <span className="text-gray-500 text-sm">
                {moment(date).format("YYYY-MM-DD")}
              </span>

              <div className="flex space-x-2">
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button>Reply</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto p-0">
                    <DialogHeader className="px-6 py-4 border-b">
                      <DialogTitle className="text-2xl font-bold text-primary">
                        {subject}
                      </DialogTitle>
                    </DialogHeader>

                    <div className="px-6 py-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <Avatar>
                          <AvatarImage src="" />
                          <AvatarFallback>{firstLetter}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-xl font-medium text-primary">
                            {fullName}
                          </h3>
                          <p className="text-gray-600">{email}</p>
                          <p className="text-gray-500 text-sm mt-1">{date}</p>
                        </div>
                      </div>

                      <div className="border-t my-4"></div>

                      <div className="text-gray-700 mb-8 whitespace-pre-wrap">
                        {message}
                      </div>

                      <div>
                        <h4 className="text-lg font-medium text-primary mb-3">
                          Your Reply
                        </h4>
                        <textarea
                          value={replyContent}
                          onChange={(e) => setReplyContent(e.target.value)}
                          placeholder="Type your reply here..."
                          className="min-h-[200px] w-full p-3 border rounded-md"
                        />
                      </div>

                      <div className="flex justify-end space-x-3 mt-6">
                        <Button
                          variant="outline"
                          onClick={() => setOpen(false)}
                          className="px-6"
                        >
                          Cancel
                        </Button>
                        <Button>Send Reply</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button onClick={() => {}} variant="secondary">
                  Archive
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
