import { DataType } from "../types"

export enum SortModeInput  {
  Heading,
  Subheading,
  Price
}

export enum SortMode {
  Natural,
  HeadingASC,
  HeadingDESC,
  SubheadingASC,
  SubheadingDESC,
  PriceASC,
  PriceDESC
}
export type SortFuncType = ((a: DataType, b: DataType) => number) | undefined

export interface SortOptionsProps {
  setSortFunc: React.Dispatch<React.SetStateAction<SortFuncType>> | any
}