import { usePagination } from "../../../common/Pagination/PaginationContext";
import Pagination from "../../../common/Pagination"

const Header = () => {

  const {
    total_count,
    pageSize,
    currentPage,
    total_pages,
    onPageChange,
  } = usePagination();

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  return (
    <div>
        <div className="flex justify-between">
            <h3>Transactions</h3>
            <div>
              <Pagination
                  total_count={total_count}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  total_pages={total_pages}
                  onPageChange={handlePageChange}
              />
            </div>
        </div>
    </div>
  )
}

export default Header