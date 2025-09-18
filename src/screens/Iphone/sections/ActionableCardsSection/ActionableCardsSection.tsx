import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const ActionableCardsSection = (): JSX.Element => {
  const tabsData = [
    {
      label: "Credit Cards",
      count: "20",
      isActive: true,
      badgeColor: "bg-[#e43d3d]",
    },
    {
      label: "Savings A/c",
      count: "10",
      isActive: false,
      badgeColor: "bg-black",
    },
    {
      label: "Demat A/c",
      count: "10",
      isActive: false,
      badgeColor: "bg-black",
    },
  ];

  const filterData = [
    {
      label: "Actionable",
      count: "3",
      isActive: true,
    },
    {
      label: "Pending",
      count: "2",
      isActive: false,
    },
    {
      label: "Rejected",
      count: "1",
      isActive: false,
    },
    {
      label: "Activated",
      count: "1",
      isActive: false,
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <nav className="relative">
        <Separator className="absolute top-7 right-1 w-[393px]" />

        <div className="flex">
          {tabsData.map((tab, index) => (
            <div
              key={index}
              className={`relative ${index === 0 ? "w-[150px]" : index === 1 ? "w-[113px] ml-4" : "w-[106px] ml-3.5"} ${!tab.isActive ? "opacity-30" : ""}`}
            >
              {tab.isActive && (
                <div className="absolute bottom-0 left-0 w-full h-[3.45px] bg-current" />
              )}

              <div className="flex items-center gap-2 px-4 py-2">
                <span
                  className={`[font-family:'Poppins',Helvetica] text-sm text-center tracking-[0] leading-4 whitespace-nowrap ${tab.isActive ? "font-medium text-[#000000cc]" : "font-light text-black"}`}
                >
                  {tab.label}
                </span>

                <Badge
                  className={`${tab.badgeColor} text-white rounded-[20px] w-6 h-4 flex items-center justify-center p-0`}
                >
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[10px] leading-3">
                    {tab.count}
                  </span>
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </nav>

      <div className="ml-3.5 flex gap-0.5">
        {filterData.map((filter, index) => (
          <Button
            key={index}
            variant={filter.isActive ? "default" : "outline"}
            className={`h-auto rounded-[28px] px-3 py-2 ${
              filter.isActive
                ? "bg-[#0057d81a] text-[#0057d8] border-0 hover:bg-[#0057d81a]"
                : "border-[#0000001a] text-[#00000080] bg-transparent hover:bg-gray-50"
            }`}
          >
            <span className="[font-family:'Poppins',Helvetica] text-xs text-center tracking-[0] leading-4 whitespace-nowrap">
              {filter.label} ({filter.count})
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
};
