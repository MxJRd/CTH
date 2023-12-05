import { HeaderProps } from "./types"
import { SortOptions } from "../../components/SortOptions"

export const Header = ({ handleInputChange, inputFilter, setSortFunc }: HeaderProps) => {

  return (
    <div className='relative gap-2 flex flex-col md:flex-row sm:justify-between'>
      {
        (
          <div className="join join-vertical sm:join-horizontal">
            <SortOptions
              setSortFunc={setSortFunc}
            />
          </div>
        )
      }
      <input className='rounded-md pl-5' onChange={handleInputChange} value={inputFilter} placeholder='Search...' />
    </div>
  )
}

/*
  import { FilterDropdown } from "./FilterDropdown"
  Example: 
  <FilterDropdown>
    {
      filters.map((filter, idx) => (
        <FilterDropdown.Item
          key={filter + idx}
          label={filter}
          setFilter={setFilterKey}
        />
      )
      )
    }
    <FilterDropdown.Toggle label={FiltersEnum.Price} setItems={setItems} />
  </FilterDropdown>

*/