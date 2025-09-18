import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const customerData = [
  {
    id: 1,
    name: "Satish Patil",
    products: [
      { name: "SBI Prime", isActive: true },
      { name: "HDFC Freedom", isActive: false },
      { name: "Axis MyZone", isActive: false },
      { name: "Kiwibank", isActive: false },
    ],
    hasActionRequired: true,
    actionMessage: "Upload income proof to proceed with your application",
  },
  {
    id: 2,
    name: "Ajay Potdar",
    products: [{ name: "SBI Prime Credit Card", isActive: true }],
    hasActionRequired: true,
    actionMessage: "Upload income proof to proceed with your application",
  },
  {
    id: 3,
    name: "Akshata Kenjale",
    products: [{ name: "SBI Prime Credit Card", isActive: true }],
    hasActionRequired: false,
    bankUpdate: {
      lastUpdated: "21 August, 2025",
      expectedNext: "28 August, 2025",
      delayDays: 6,
    },
  },
  {
    id: 4,
    name: "Ninganna",
    products: [{ name: "SBI Prime Credit Card", isActive: true }],
    hasActionRequired: false,
    bankUpdate: {
      lastUpdated: "21 August, 2025",
      expectedNext: "28 August, 2025",
      delayDays: 6,
    },
  },
];

export const SearchSection = (): JSX.Element => {
  return (
    <div className="w-full relative">
      <div className="flex flex-col gap-2.5 px-4">
        {customerData.map((customer) => (
          <Card
            key={customer.id}
            className="bg-white rounded-[10px] overflow-hidden shadow-[0px_2px_12px_#0000000f] border-0"
          >
            <CardContent className="p-0">
              <div className="flex flex-col">
                {/* Header Section */}
                <div className="p-3.5 flex flex-col gap-3.5">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <span className="[font-family:'Poppins',Helvetica] font-medium text-[#282828] text-base tracking-[-0.37px]">
                        {customer.name}
                      </span>
                      <ChevronRightIcon className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative">
                    <div className="w-full h-px bg-[url(/line-47.svg)] bg-cover bg-[50%_50%]" />

                    {/* Products */}
                    <div className="flex gap-4 mt-2">
                      {customer.products.map((product, index) => (
                        <div key={index} className="flex flex-col items-center">
                          {product.isActive && (
                            <div className="w-full h-px bg-[url(/rectangle-2.svg)] mb-2" />
                          )}
                          <span
                            className={`[font-family:'Poppins',Helvetica] text-[13px] tracking-[0.02px] leading-4 whitespace-nowrap ${
                              product.isActive
                                ? "font-medium text-[#282828]"
                                : "font-normal text-[#282828b2]"
                            }`}
                          >
                            {product.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Required Section */}
                {customer.hasActionRequired && (
                  <div className="px-3.5 pb-3.5 flex flex-col gap-3.5">
                    <div className="flex rounded-lg bg-[linear-gradient(0deg,rgba(255,249,242,1)_0%,rgba(255,249,242,1)_100%)] p-4">
                      <div className="flex flex-col gap-1.5">
                        <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#282828e6] text-xs tracking-[0] leading-4">
                          Customer Action Required
                        </div>
                        <div className="[font-family:'Poppins',Helvetica] font-normal text-[#000000b2] text-xs tracking-[0] leading-[18px]">
                          {customer.actionMessage}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1.5">
                      <Button
                        variant="outline"
                        className="flex-1 h-auto py-2 border-[#0057d8] text-[#0057d8] [font-family:'Poppins',Helvetica] font-normal text-[13px] hover:bg-[#0057d8] hover:text-white"
                      >
                        View Details
                      </Button>
                      <Button className="flex-1 h-auto py-2 bg-[#0057d8] text-white [font-family:'Poppins',Helvetica] font-medium text-[13px] hover:bg-[#0057d8]/90">
                        Remind Customer
                      </Button>
                    </div>
                  </div>
                )}

                {/* Bank Update Section */}
                {customer.bankUpdate && (
                  <div className="px-3.5 pb-3.5 flex flex-col gap-3.5">
                    <div className="relative bg-[#0057d80a] rounded-lg p-4">
                      <div className="flex justify-between mb-4">
                        <div className="flex flex-col gap-1.5">
                          <div className="[font-family:'Poppins',Helvetica] font-normal text-[#000000b2] text-xs tracking-[0] leading-4">
                            Bank Last updated on
                          </div>
                          <div className="[font-family:'Poppins',Helvetica] font-medium text-[#000000e6] text-[13px] tracking-[0] leading-[18px]">
                            {customer.bankUpdate.lastUpdated}
                          </div>
                        </div>

                        <div className="w-px h-full bg-[url(/line-43.svg)] bg-cover" />

                        <div className="flex flex-col gap-1">
                          <div className="[font-family:'Poppins',Helvetica] font-normal text-[#000000b2] text-xs tracking-[0] leading-4">
                            Expected Next update
                          </div>
                          <div className="[font-family:'Poppins',Helvetica] font-medium text-[#000000e6] text-[13px] tracking-[0] leading-[18px]">
                            {customer.bankUpdate.expectedNext}
                          </div>
                        </div>
                      </div>

                      <div className="w-full h-px bg-[url(/line-44.svg)] bg-cover mb-2" />

                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 relative">
                          <img
                            className="absolute top-[calc(50.00%_-_5px)] left-[calc(50.00%_-_5px)] w-[11px] h-2.5"
                            alt="Polygon"
                            src="/polygon-1.svg"
                          />
                          <img
                            className="absolute w-[87.50%] h-[78.13%] top-[9.37%] left-[6.25%]"
                            alt="Vector"
                            src="/vector.svg"
                          />
                        </div>
                        <span className="[font-family:'Poppins',Helvetica] font-normal text-[#000000b2] text-xs tracking-[0] leading-4">
                          Update from bank is delayed by{" "}
                          {customer.bankUpdate.delayDays} days
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full h-auto py-2 border-[#0057d8] text-[#0057d8] [font-family:'Poppins',Helvetica] font-normal text-[13px] hover:bg-[#0057d8] hover:text-white"
                    >
                      View Details
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Help Section */}
      <div className="fixed bottom-0 left-0 w-full h-14 flex justify-center bg-white shadow-[0px_-3px_6px_#0000000a]">
        <div className="flex items-center justify-between w-full max-w-[360px] px-4">
          <span className="[font-family:'Poppins',Helvetica] font-normal text-[#282828cc] text-xs tracking-[0] leading-4">
            Facing an issue? Tap for help.
          </span>
          <Button className="bg-[#333333] text-white [font-family:'Inter',Helvetica] font-medium text-sm h-auto py-2 px-4 hover:bg-[#333333]/90">
            Need Help
          </Button>
        </div>
      </div>
    </div>
  );
};
