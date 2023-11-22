import { LiaQuoteLeftSolid } from "react-icons/lia";
import { LiaQuoteRightSolid } from "react-icons/lia";
import { GoDot } from "react-icons/go";
import { FaRegDotCircle } from "react-icons/fa";

export default function Comments() {
  return (
    <div className="w-full h-[300px] bg-sky-50">
      <div className=" w-full h-full flex flex-col justify-center items-center ">
        <p className="text-center  text-lg font-bold">The Canadian Home</p>
        <p className="text-center mb-7 text-[10px] font-semibold">
          What customers say about the The Canadian Home experience
        </p>
        <div className="flex flex-row gap-5 p-2">
          <div className="relative w-[400px] h-[150px] bg-white flex flex-col justify-center items-center rounded-xl border border-blue-200">
            <div className="absolute top-0 left-0">
              <LiaQuoteLeftSolid size={30} className="fill-blue-400" />
            </div>

            <p className="text-[8px] text-center p-2">
              The Canadian Home is absolutely amazing. It successfully surpasses
              all the other apps in this area. Their Chat function is what have
              been missing from online home search. The experts are always
              available with correct answers to anything.
            </p>
            <p className="text-[12px] font-bold">John Brown</p>
            <div className="absolute bottom-0 right-0">
              <LiaQuoteRightSolid size={30} className="fill-blue-400" />
            </div>
          </div>
          <div className="relative w-[400px] h-[150px] bg-white flex flex-col justify-center items-center rounded-xl border border-blue-200">
            <div className="absolute top-0 left-0">
              <LiaQuoteLeftSolid size={30} className="fill-blue-400" />
            </div>

            <p className="text-[8px] text-center p-2">
              The Canadian Home is absolutely amazing. It successfully surpasses
              all the other apps in this area. Their Chat function is what have
              been missing from online home search. The experts are always
              available with correct answers to anything.
            </p>
            <p className="text-[12px] font-bold">John Brown</p>
            <div className="absolute bottom-0 right-0">
              <LiaQuoteRightSolid size={30} className="fill-blue-400" />
            </div>
          </div>
          <div className="relative w-[400px] h-[150px] bg-white flex flex-col justify-center items-center rounded-xl border border-blue-200">
            <div className="absolute top-0 left-0">
              <LiaQuoteLeftSolid size={30} className="fill-blue-400" />
            </div>

            <p className="text-[8px] text-center p-2">
              The Canadian Home is absolutely amazing. It successfully surpasses
              all the other apps in this area. Their Chat function is what have
              been missing from online home search. The experts are always
              available with correct answers to anything.
            </p>
            <p className="text-[12px] font-bold">John Brown</p>
            <div className="absolute bottom-0 right-0">
              <LiaQuoteRightSolid size={30} className="fill-blue-400" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center pt-8">
          <GoDot className="fill-blue-400"/>
          <FaRegDotCircle className="fill-blue-400"/>
          <GoDot className="fill-blue-400"/>
          <GoDot className="fill-blue-400"/>
        </div>
      </div>
    </div>
  );
}
