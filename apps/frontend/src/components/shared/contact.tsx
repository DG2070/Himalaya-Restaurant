import { Phone, Globe, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="bg-[#1c1c1c] p-8 rounded-3xl max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#2a2a2a] rounded-2xl p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-[#ffffff]">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="text-lg">2527-5899 Fax: 2527-4899</span>
            </div>

            <div className="flex items-center gap-4 text-[#ffffff]">
              <Globe className="w-5 h-5 flex-shrink-0" />
              <span className="text-lg">www.himalayanrestaurant.com.hk</span>
            </div>

            <div className="flex items-center gap-4 text-[#ffffff]">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="text-lg">himalayan.2007hk@gmail.com</span>
            </div>

            <div className="flex items-start gap-4 text-[#ffffff]">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <div className="text-lg">
                <div>1/F A 22-30</div>
                <div>Tai Wong Street</div>
                <div>East Wanchai HK</div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-[#ffffff] text-xl font-medium mb-4">Connect with us</h3>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#1d9bf0] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="w-10 h-10 bg-[#0076b2] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[#ffffff] text-lg font-medium">First Name</label>
              <Input
                className="bg-transparent border-0 border-b border-[#ffffff] rounded-none px-0 pb-2 text-[#ffffff] placeholder:text-[#e0e0e0] focus-visible:ring-0 focus-visible:border-[#ffffff]"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <label className="text-[#ffffff] text-lg font-medium">Last Name</label>
              <Input
                className="bg-transparent border-0 border-b border-[#ffffff] rounded-none px-0 pb-2 text-[#ffffff] placeholder:text-[#e0e0e0] focus-visible:ring-0 focus-visible:border-[#ffffff]"
                placeholder=""
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[#ffffff] text-lg font-medium">Email</label>
              <Input
                type="email"
                className="bg-transparent border-0 border-b border-[#ffffff] rounded-none px-0 pb-2 text-[#ffffff] placeholder:text-[#e0e0e0] focus-visible:ring-0 focus-visible:border-[#ffffff]"
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <label className="text-[#ffffff] text-lg font-medium">Phone Number</label>
              <Input
                type="tel"
                className="bg-transparent border-0 border-b border-[#ffffff] rounded-none px-0 pb-2 text-[#ffffff] placeholder:text-[#e0e0e0] focus-visible:ring-0 focus-visible:border-[#ffffff]"
                placeholder=""
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[#ffffff] text-lg font-medium">Message</label>
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
  )
}
