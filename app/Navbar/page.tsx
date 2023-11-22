import Image from "next/image";
import logo from "../assets/canadaH.png";
import { GrPhone } from "react-icons/gr";
import { CiMail } from "react-icons/ci";

export default function Navbar() {
  return (
    <div>
      <div className="w-full h-[60px] bg-white p-1">
        <div className="flex justify-evenly items-center gap-28">
          <Image alt="" src={logo} height={55} width={90} className="p-" />
          <div className="flex gap-4 justify-center items-center">
            <div className="flex justify-center items-center gap-1">
              <GrPhone className="fill-blue-700" />
              <p className="text-center text-sm text-gray-700">
                <a href="tel:+19052061444">+19052061444</a>
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <CiMail className="fill-blue-700" />
              <p className="text-center text-sm text-gray-700">
                <a href="mailto:info@thecanadianhome.com">
                  info@thecanadianhome.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
