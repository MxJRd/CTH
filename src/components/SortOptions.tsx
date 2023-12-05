import { useState } from "react";
import { SortMode, SortModeInput, SortOptionsProps } from "./types";
import { DataType } from "../types";

const UpChevron = ({ isHidden }: { isHidden: boolean }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-3 h-3 ${isHidden && 'hidden'}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  )
}

const DownChevron = ({ isHidden }: { isHidden: boolean }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-3 h-3 ${isHidden && 'hidden'} rotate-180`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  )
}

export const SortOptions = ({ setSortFunc }: SortOptionsProps) => {
  const [sortMode, setSortMode] = useState(SortMode.Natural)

  const updateSortMode = (sortModeInput: SortModeInput) => {
    const shouldResetNatural =
      (sortMode === SortMode.HeadingDESC &&
        sortModeInput === SortModeInput.Heading) ||
      (sortMode === SortMode.SubheadingDESC &&
        sortModeInput === SortModeInput.Subheading) ||
      (sortMode === SortMode.PriceDESC &&
        sortModeInput === SortModeInput.Price);
    if (shouldResetNatural) {
      setSortMode(SortMode.Natural);
      setSortFunc(undefined);
      return;
    }
    if (sortModeInput === SortModeInput.Heading) {
      if (sortMode === SortMode.HeadingASC) {
        setSortMode(SortMode.HeadingDESC)
        setSortFunc(() => (a: DataType, b: DataType) => -a['Heading'].localeCompare(b['Heading']))
      }
      else {
        setSortMode(SortMode.HeadingASC)
        setSortFunc(() => (a: DataType, b: DataType) => a['Heading'].localeCompare(b['Heading']))
      }
    }
    else if (sortModeInput === SortModeInput.Subheading) {
      if (sortMode === SortMode.SubheadingASC) {
        setSortMode(SortMode.SubheadingDESC)
        setSortFunc(() => (a: DataType, b: DataType) => -a['Subheading'].localeCompare(b['Subheading']))
      }
      else {
        setSortMode(SortMode.SubheadingASC)
        setSortFunc(() => (a: DataType, b: DataType) => a['Subheading'].localeCompare(b['Subheading']))
      }
    }
    else if (sortModeInput === SortModeInput.Price) {
      if (sortMode === SortMode.PriceASC) {
        setSortMode(SortMode.PriceDESC)
        setSortFunc(() => (a: DataType, b: DataType) => -(a['Price'] - (b['Price'])))
      }
      else {
        setSortMode(SortMode.PriceASC)
        setSortFunc(() => (a: DataType, b: DataType) => a['Price'] - (b['Price']))
      }
    }
  }

  const handleSortClick = (sortModeInput: SortModeInput) => () => {
    updateSortMode(sortModeInput)
  }

  return (
    <div className="join join-vertical md:join-horizontal w-full">
      <button onClick={handleSortClick(SortModeInput.Heading)} className="btn join-item bg-gray-800">
        Heading
        <UpChevron isHidden={sortMode !== SortMode.HeadingASC} />
        <DownChevron isHidden={sortMode !== SortMode.HeadingDESC} />
      </button>
      <button onClick={handleSortClick(SortModeInput.Subheading)} className="btn join-item bg-gray-800">
        Subheading
        <UpChevron isHidden={sortMode !== SortMode.SubheadingASC} />
        <DownChevron isHidden={sortMode !== SortMode.SubheadingDESC} />
      </button>
      <button onClick={handleSortClick(SortModeInput.Price)} className="btn join-item bg-gray-800">
        Price
        <UpChevron isHidden={sortMode !== SortMode.PriceASC} />
        <DownChevron isHidden={sortMode !== SortMode.PriceDESC} />
      </button>
    </div>
  );
};
