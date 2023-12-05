import { PaginatorProps } from "./types"

export const Paginator = ({ nPages, currentPage, setCurrentPage }: PaginatorProps) => {

  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1)
  }

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  return (
    <nav>
      <ul className='flex justify-center'>
      <div className="join grid grid-cols-2 bg-gray-700">
        <button onClick={goToPrevPage} className="join-item btn btn-outline">Previous</button>
        <button onClick={goToNextPage} className="join-item btn btn-outline">Next</button>
      </div>
      </ul>
    </nav>
  )
}