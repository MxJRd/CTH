export enum FiltersEnum {
  Heading = 'Heading',
  Subheading = 'Subheading',
  Price = 'Price'
}

export interface DropdownItemProps {
  label: FiltersEnum
  setFilter: (filter: FiltersEnum) => void
}

export interface PaginatorProps {
  nPages: number
  currentPage: number
  setCurrentPage: (page: number) => void
}
