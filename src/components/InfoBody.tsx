import { IoChatbubblesOutline } from "react-icons/io5";
import { VscBlank } from "react-icons/vsc";
import { AiOutlineThunderbolt } from "react-icons/ai";

export function InfoBody() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-3">
          <p className="text-[#6941C6] font-semibold text-sm">Who we are</p>
          <h2 className="text-3xl font-semibold">
            Commercial interior designers
          </h2>
          <p>
            Untitled are a commercial interior design studio. We specialise in
            customised office design, restaurant design, shop design, and studio
            design.{" "}
          </p>
        </div>
        <div className="space-y-8">
          <div>
            <div className="flex text-xl gap-4 pb-1 items-center">
              <div className="border border-gray-300 rounded-md p-2 shadow">
                <IoChatbubblesOutline />
              </div>
              <h3 className="font-semibold">Share team inboxes</h3>
            </div>
            <div className="flex text-xl gap-11">
              <VscBlank />
              <p className="text-base text-gray-600">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
          </div>
          <div>
            <div className="flex text-xl gap-4 pb-1 items-center">
              <div className="border border-gray-300 rounded-md p-2 shadow">
                <AiOutlineThunderbolt />
              </div>
              <h3 className="font-semibold">Deliver instant answers</h3>
            </div>
            <div className="flex text-xl gap-11">
              <VscBlank />
              <p className="text-base text-gray-600">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src="\Image2.png" alt="Office Image 2" />
    </div>
  );
}
