import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";

export const CreditCardListSection = (): JSX.Element => {
  return (
    <header className="w-full h-[50px] flex border-b border-[#0000000d] shadow-[0px_3px_4px_#0000000a] bg-white">
      <div className="flex items-center justify-between w-full px-3.5 py-[13px]">
        <div className="flex items-center">
          <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
          <h1 className="ml-3 [font-family:'Poppins',Helvetica] font-medium text-[#282828] text-lg tracking-[-0.37px] leading-normal">
            Leads
          </h1>
        </div>

        <div className="flex items-center">
          <span className="[font-family:'Poppins',Helvetica] font-normal text-[#0057d8] text-sm tracking-[-0.37px] leading-normal mr-2">
            Lead Guide
          </span>
          <ChevronRightIcon className="w-5 h-5 text-[#0057d8]" />
        </div>
      </div>
    </header>
  );
};
