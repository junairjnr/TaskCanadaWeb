import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import Card1 from "../assets/narcity.png";
import Card2 from "../assets/irsaugapng.png";
import Card3 from "../assets/toronto.jpg";
import Card4 from "../assets/yahoo.png";
import Card5 from "../assets/yahoo.png";
import Card6 from "../assets/otva.png";

export default function Featured() {
  return (
    <div className="w-full h-[200px] bg- flex justify-center items-center bg-sky-50">
      <div className="flex flex-col justify-center items-center ">
        <p className="text-sm font-bold mt-3">Featured On</p>
        <div className="w-[1000px] h-[150px] ">
          <div className="w-full h-full flex flex-row justify-center items-center">
            <AiOutlineLeft size={30} className="fill-blue-300 ml-8"/>
            <div className="h-full w-full flex justify-center items-center gap-10">
              <div className="w-[120px] h-[60px] bg-gray-600 flex justify-center items-center">
                <Image alt="" src={Card1} height={100} width={100} />
              </div>
              <div className=" bg-gray-300 flex justify-center items-center">
                <Image alt="" src={Card2} height={100} width={100} />
              </div>
              <div className=" bg-gray-300 flex justify-center items-center">
                <Image alt="" src={Card3} height={100} width={100} />
              </div>
              <div className=" bg-gray-300 flex justify-center items-center">
                <Image alt="" src={Card4} height={100} width={100} />
              </div>
              <div className=" bg-gray-300 flex justify-center items-center">
                <Image alt="" src={Card5} height={100} width={100} />
              </div>
              <div className="w-[120px] h-[60px] bg-gray-600 flex justify-center items-center">
                <Image alt="" src={Card6} height={100} width={100} />
              </div>
            </div>
            <AiOutlineRight size={30} className="fill-blue-300 mr-8"/>
          </div>
        </div>
      </div>
    </div>
  );
}
