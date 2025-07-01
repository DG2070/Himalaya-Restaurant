import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div
      className="rounded-3xl w-full px-[65px] py-[71px]"
      style={{
        background:
          "linear-gradient(to right, #3a3a3a 0%, #2a2a2a 70%, #1a1a1a 100%)",
      }}
    >
      <div className="flex flex-col md:flex-row gap-[69px] w-full items-center justify-between">
        <div className="bg-black/20 rounded-[30px] p-16 space-y-6 w-[492px]">
          <div className="space-y-[29px]">
            <div className="flex items-center gap-[22px] text-heading">
              <svg
                width="26"
                height="23"
                viewBox="0 0 26 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.02799 1.48939C3.66349 0.951653 4.4001 0.707228 5.23781 0.756113C6.07552 0.804996 6.75435 1.12275 7.27431 1.70937L10.2207 4.86244C10.5096 5.15575 10.6974 5.48573 10.784 5.85236C10.8707 6.219 10.8562 6.57341 10.7407 6.91561L9.8741 9.92203C9.75855 10.2642 9.84521 10.5575 10.1341 10.802L14.1204 14.175C14.4093 14.4194 14.7559 14.4928 15.1603 14.395L18.7134 13.6617C19.1178 13.564 19.5366 13.5517 19.9699 13.6251C20.4032 13.6984 20.7932 13.8573 21.1398 14.1017L24.8662 16.5948C25.5595 17.0348 25.935 17.6092 25.9928 18.318C26.0506 19.0268 25.7617 19.6501 25.1262 20.1879L23.4796 21.5811C22.8441 22.1188 22.1075 22.4732 21.2698 22.6443C20.4321 22.8154 19.6089 22.7788 18.8 22.5343C14.4671 21.2633 10.6685 19.2468 7.4043 16.4848C4.14012 13.7228 1.75698 10.5086 0.254881 6.84228C-0.0339842 6.15789 -0.0773139 5.46128 0.124892 4.75245C0.327097 4.04362 0.745952 3.42034 1.38146 2.8826L3.02799 1.48939Z"
                  fill="#F2F2F2"
                />
              </svg>{" "}
              <span className="lato-regular-18 text-heading">
                2527-5899 Fax: 2527-4899
              </span>
            </div>

            <div className="flex items-center gap-[22px] text-heading">
              <svg
                width="27"
                height="25"
                viewBox="0 0 27 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 12.75C23 18.8251 18.0751 23.75 12 23.75M23 12.75C23 6.67487 18.0751 1.75 12 1.75M23 12.75H1M12 23.75C5.92487 23.75 1 18.8251 1 12.75M12 23.75C9.17546 20.7842 7.6 16.8456 7.6 12.75C7.6 8.65441 9.17546 4.71577 12 1.75M12 23.75C14.8245 20.7842 16.4 16.8456 16.4 12.75C16.4 8.65441 14.8245 4.71577 12 1.75M1 12.75C1 6.67487 5.92487 1.75 12 1.75"
                  stroke="#F2F2F2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              <span className="lato-regular-18 text-heading">
                www.himalayanrestaurant.com.hk
              </span>
            </div>

            <div className="flex items-center gap-[22px] text-heading">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="lato-regular-18 text-heading">
                himalayan.2007hk@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-[22px] text-heading">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <div className="lato-regular-18 text-heading flex flex-col gap-[18px]">
                <div>1/F A 22-30</div>
                <div>Tai Wong Street</div>
                <div>East Wanchai HK</div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-[#ffffff] text-xl font-medium mb-4">
              Connect with us
            </h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#1d9bf0] rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="w-10 h-10 bg-[#0076b2] rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[#ffffff] text-lg font-medium">
                First Name
              </label>
              <Input
                className="bg-transparent border-0 border-b border-[#ffffff] rounded-none px-0 pb-2 text-[#ffffff] placeholder:text-[#e0e0e0] focus-visible:ring-0 focus-visible:border-[#ffffff]"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <label className="text-[#ffffff] text-lg font-medium">
                Last Name
              </label>
              <Input
                className="bg-transparent border-0 border-b border-[#ffffff] rounded-none px-0 pb-2 text-[#ffffff] placeholder:text-[#e0e0e0] focus-visible:ring-0 focus-visible:border-[#ffffff]"
                placeholder=""
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[#ffffff] text-lg font-medium">
                Email
              </label>
              <Input
                type="email"
                className="bg-transparent border-0 border-b border-[#ffffff] rounded-none px-0 pb-2 text-[#ffffff] placeholder:text-[#e0e0e0] focus-visible:ring-0 focus-visible:border-[#ffffff]"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <label className="text-[#ffffff] text-lg font-medium">
                Phone Number
              </label>
              <Input
                type="tel"
                className="bg-transparent border-0 border-b border-[#ffffff] rounded-none px-0 pb-2 text-[#ffffff] placeholder:text-[#e0e0e0] focus-visible:ring-0 focus-visible:border-[#ffffff]"
                placeholder=""
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[#ffffff] text-lg font-medium">
              Message
            </label>
            <Textarea
              className="bg-transparent border-0 border-b border-[#ffffff] rounded-none px-0 pb-2 text-[#ffffff] placeholder:text-[#e0e0e0] focus-visible:ring-0 focus-visible:border-[#ffffff] resize-none min-h-[100px]"
              placeholder=""
            />
          </div>

          <div className="pt-4">
            <Button className="bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-3 rounded-lg text-lg font-medium">
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
