import { useState } from 'react';
import { MainContent } from './MainContent';
import data from '../../../server/data';
import { Header } from './Header';
import { Paginator } from '../../components/landing/Paginator';
import { SortFuncType } from '../../components/types';

export const Landing = () => {
  const [sortFunc, setSortFunc] = useState<SortFuncType>(() => () => 0)
  const [currentPage, setCurrentPage] = useState(1);
  const [inputFilter, setInputFilter] = useState('');
  
  const sortedItems = sortFunc ?  [...data].sort((a, b) => sortFunc(a, b)) : data
  const currItems = sortedItems.filter((prevItems) => prevItems.Heading.includes(inputFilter))

  const recordsPerPage = 4;

  const lastItem = currentPage * recordsPerPage;
  const currentIdx = lastItem - recordsPerPage;
  const displayItems = currItems.slice(currentIdx, lastItem);
  const nPages = Math.ceil(currItems.length / recordsPerPage);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFilter(e.target.value);
  };

  return (
    <div className='flex flex-col gap-4'>
      <Header
        handleInputChange={handleInputChange}
        setSortFunc={setSortFunc}
        inputFilter={inputFilter}
      />
      <MainContent
        items={displayItems}
      />
      <Paginator
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
