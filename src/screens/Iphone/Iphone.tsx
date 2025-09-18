import React from "react";
import { ActionableCardsSection } from "./sections/ActionableCardsSection/ActionableCardsSection";
import { CreditCardListSection } from "./sections/CreditCardListSection/CreditCardListSection";
import { SearchSection } from "./sections/SearchSection/SearchSection";

export const Iphone = (): JSX.Element => {
  return (
    <div className="bg-[#f5f9ff] overflow-hidden w-full min-w-[393px] min-h-[1287px] flex flex-col">
      <CreditCardListSection />
      <ActionableCardsSection />
      <SearchSection />
    </div>
  );
};
