import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  data,
  handlePageChange,
  handlePageSizeChange,
}: any) {
  const [currentPage, setCurrentPage] = useState(data?.currentPage);
  const [pageSize, setPageSize] = useState(data?.size);
  const totalItems = data?.total;
  const totalPages = data?.totalPages;

  // Update state when props change
  useEffect(() => {
    setCurrentPage(data?.currentPage);
    setPageSize(data?.size);
  }, [data]);

  // Generate array of page numbers to display with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    // Handle case when there are no pages
    if (totalPages <= 0) {
      return [1];
    }

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate start and end of visible pages
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust to show a consistent number of pages
      if (currentPage <= 2) {
        endPage = 3;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 2;
      }

      // Add ellipsis before middle pages if needed
      if (startPage > 2) {
        pages.push("...");
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis after middle pages if needed
      if (endPage < totalPages - 1) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  // Create page number elements
  const pageNumbers = getPageNumbers();

  // Handle the case when there are no items
  if (totalItems === 0) {
    return (
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center text-sm text-gray-700">
          <div>No items to display</div>
          <div className="flex items-center space-x-2">
            <label htmlFor="pageSize" className="text-sm">
              Items per page:
            </label>
            <select
              id="pageSize"
              value={pageSize}
              onChange={(e) => {
                const newSize = parseInt(e.target.value, 10);
                setPageSize(newSize);
                handlePageSizeChange(newSize);
              }}
              className="border rounded p-1 text-sm"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center text-sm text-gray-700">
        <div>
          Showing {(currentPage - 1) * pageSize + 1} -{" "}
          {Math.min(currentPage * pageSize, totalItems)} of {totalItems} items
        </div>
        <div className="flex items-center space-x-2">
          <label htmlFor="pageSize" className="text-sm">
            Items per page:
          </label>
          <select
            id="pageSize"
            value={pageSize}
            onChange={(e) => {
              const newSize = parseInt(e.target.value, 10);
              setPageSize(newSize);
              handlePageSizeChange(newSize);
            }}
            className="border rounded p-1 text-sm"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        <nav className="flex items-center space-x-1">
          {/* Previous button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={data?.isFirst}
            className={`p-2 rounded-md flex items-center justify-center ${
              data?.isFirst
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Page numbers */}
          {pageNumbers.map((page, index) =>
            page === "..." ? (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-2 text-gray-500"
              >
                ...
              </span>
            ) : (
              <button
                key={`page-${page}`}
                onClick={() => handlePageChange(page as number)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === page
                    ? "bg-blue-500 text-white font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ),
          )}

          {/* Next button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={data?.isLast}
            className={`p-2 rounded-md flex items-center justify-center ${
              data?.isLast
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </nav>
      </div>
    </div>
  );
}
