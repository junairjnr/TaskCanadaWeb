import maini from "../assets/mainBack.png";

export default function Main() {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-full flex flex-col justify-center  bg-[url('assets/mainBack.png')] bg-no-repeat bg-cover">
        <div className="w-full h-full flex flex-col  items-center  gap-10">
          <div className="w-[500px] h-[200] flex justify-center ">
            <div className="flex flex-col mt-[100px] ">
              <p className="text-center font-bold text-3xl">
                Thinking of selling your Home..?
              </p>
              <p className="text-center text-[12px] p-2">
                Get an instant estimate of your home's value.You can quickly
                determine the estimated value of your home by answering a few
                quick questions
              </p>
              <div className="w-full h-[40px] p-1">
                <input
                  type="text"
                  inputMode="text"
                  placeholder="Enter your address...."
                  className="w-full h-full pl-5 border border-blue-500 rounded-lg p-2 text-[10px]"
                />
              </div>
              <div className="w-[220px] h-[40px] flex justify-center items-center ml-[120px] mt-3">
                <div className="w-full h-full bg-blue-500 rounded-3xl ml-8 text-white text-center">
                  <button className="w-full h-full text-[14px]">
                    Get Free Estimate
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1200px] h-[50px]  ">
            <div className="w-full h-full flex justify-between items-center text-white">
              <div className=" h-[30px] rounded-md bg-red-500 items-center justify-center">
                <p className="text-center text-[14px] p-1">$793,000</p>
              </div>
              <div className=" h-[30px] rounded-md bg-red-500 items-center justify-center">
                <p className="text-center text-[14px] p-1">Sold over Asking</p>
              </div>
              <div className=" h-[30px] rounded-md bg-red-500 items-center justify-center">
                <p className="text-center text-[14px] p-1">$898,800</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
