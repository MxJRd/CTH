import { ReactNode } from "react";
import { SortFuncType } from "../../components/types";

export enum FiltersEnum {
  Heading = 'Heading',
  Subheading = 'Subheading',
  Price = 'Price'
}


export interface DataType {
  Heading: string;
  Subheading: string;
  Price: number;
  showBridge?: boolean;
}

export interface MainContentProps {
  items: DataType[]
}

export interface DropdownItemProps {
  label: FiltersEnum
  setFilter: (filter: FiltersEnum) => void
}

export interface HeaderProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputFilter: string
  setSortFunc: (a: SortFuncType) => void
} 

export interface PaginatorProps {
  nPages: number
  currentPage: number
  setCurrentPage: (page: number) => void
}

export interface FilterDropdownProps {
  children: ReactNode[]
}