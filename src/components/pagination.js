import { useCallback, useState } from 'react'

function Button2({ content, onClick, active, disabled }) {
  return (
    <button
      className={`flex flex-col cursor-pointer items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors
      ${active ? 'bg-white text-black' : 'text-white'}
      ${!disabled
          ? 'bg-background border border-secondary border-opacity-50 text-primary hover:bg-green_dark'
          : 'bg-background border border-secondary border-opacity-50 text-primary hover:bg-green_dark cursor-not-allowed'
        }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  )
}

function PaginationNav1({ gotoPage, canPreviousPage, canNextPage, pageCount, pageIndex }) {
  const renderPageLinks = useCallback(() => {
    if (pageCount === 0) return null
    const visiblePageButtonCount = 3
    let numberOfButtons = pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount
    const pageIndices = [pageIndex]
    numberOfButtons--
      ;[...Array(numberOfButtons)].forEach((_item, itemIndex) => {
        const pageNumberBefore = pageIndices[0] - 1
        const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1
        if (
          pageNumberBefore >= 0 &&
          (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
        ) {
          pageIndices.unshift(pageNumberBefore)
        } else {
          pageIndices.push(pageNumberAfter)
        }
      })
    return pageIndices.map((pageIndexToMap) => (
      <li key={pageIndexToMap}>
        <Button2
          content={pageIndexToMap + 1}
          onClick={() => gotoPage(pageIndexToMap)}
          active={pageIndex === pageIndexToMap}
        />
      </li>
    ))
  }, [pageCount, pageIndex])
  return (
    <ul className='flex gap-2'>
      <li>
        <Button2
          content={
            <div className='flex ml-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
          }
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />
      </li>
      {renderPageLinks()}
      <li>
        <Button2
          content={
            <div className='flex ml-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          }
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />
      </li>
    </ul>
  )
}

const Pagination = ({ pageCount, gotoPage }) => {
  const [pageIndex, setPageIndex] = useState(0)
  return (
    <div className='flex gap-3 flex-wrap'>
      <PaginationNav1
        gotoPage={(page) => {
          setPageIndex(page)
          gotoPage(page)
        }}
        canPreviousPage={pageIndex > 0}
        canNextPage={pageIndex < pageCount - 1}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    </div>
  )
}

export default Pagination;
