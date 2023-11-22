import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { MdOutlineBrightness1 } from "react-icons/md";
import phone from "../assets/picphone.png";
import client from "../assets/clienting.png";
import home from "../assets/home2.png";

export default function Cards() {
  return (
    <div className="w-full h-[500px] bg--600">
      <div className=" w-full h-full flex flex-row justify-center items-center">
        <div className="w-[300px] h-[250px] flex justify-evenly flex-col p-2">
          <div className="relative flex flex-col items-center pb-10">
            <div className="absolute top-0 left-0 pl-14 pt-2">
              <IoClose size={18} className="fill-blue-600" />
            </div>
            <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center">
              <Image
                alt=""
                src={phone}
                height={90}
                width={90}
                className="rounded-lg object-contain"
              />
            </div>
            <div className="absolute bottom-0 right-0 pr-12 pb-10">
              <MdOutlineBrightness1 size={25} className="fill-blue-600 " />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <p className="text-center font-bold">Visiblity</p>
            <p className="text-center text-[10px] text-gray-500 p-2">
              Your house will appear as a ‘featured listing’ on the home page,
              ensuring your house gets the maximum visibility
            </p>
          </div>
        </div>

        <div className="w-[300px] h-[250px] flex justify-evenly flex-col p-2">
          <div className="relative flex flex-col items-center pb-10">
            <div className="absolute bottom-0 left-0 pl-14 pb-7">
              <IoClose size={18} className="fill-blue-600" />
            </div>
            <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center">
              <Image
                alt=""
                src={client}
                height={200}
                width={200}
                className="rounded-xl object-contain"
              />
            </div>
            <div className="absolute top-0 right-0 pr-12 pb-10">
              <MdOutlineBrightness1 size={25} className="fill-blue-600 " />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <p className="text-center font-bold">Real Local Agents</p>
            <p className="text-center text-[10px] text-gray-500 p-2">
              Real Local Agents You are backed by a team of Real estate agents
              who know the market in and out. With their market insights,
              experience and sound data, your home will sell in no time.
            </p>
          </div>
        </div>

        <div className="w-[300px] h-[250px] flex justify-evenly flex-col p-2">
          <div className="relative flex flex-col items-center pb-10">
            <div className="absolute top-0 left-0 pl-14 pt-2">
              <IoClose size={18} className="fill-blue-600" />
            </div>
            <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center">
              <Image
                alt=""
                src={phone}
                height={90}
                width={90}
                className="rounded-lg object-contain"
              />
            </div>
            <div className="absolute bottom-0 right-0 pr-12 pb-10">
              <MdOutlineBrightness1 size={25} className="fill-blue-600 " />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <p className="text-center font-bold">Email & Notification</p>
            <p className="text-center text-[10px] text-gray-500 p-2">
              Email & Notification Users get instant notifications about new
              listings, price hikes, price drops, and neighborhood alerts. We
              get your property shown to people who are actively looking and
              eager to buy.
            </p>
          </div>
        </div>

        <div className="w-[300px] h-[250px] flex justify-evenly flex-col p-2">
          <div className="relative flex flex-col items-center justify-center pb-10">
            <div className="absolute bottom-0 left-0 pl-14 pb-7">
              <IoClose size={18} className="fill-blue-600" />
            </div>
            <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center">
              <Image
                alt=""
                src={home}
                height={200}
                width={200}
                className="object-contain mr-5 mb-3 rounded-lg"
              />
            </div>
            <div className="absolute top-0 right-0 pr-12 pb-10">
              <MdOutlineBrightness1 size={25} className="fill-blue-600 " />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <p className="text-center font-bold">Professional photos</p>
            <p className="text-center text-[10px] text-gray-500 p-2">
              With professional staging and photos, we make your house reach the
              best of its abilities and show it off because looks are what sell.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
