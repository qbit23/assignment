import { usePagination } from "../../../common/Pagination/PaginationContext";
import Pagination from "../../../common/Pagination";

const Header = () => {
  const { totalCount, pageSize, currentPage, totalPages, onPageChange } =
    usePagination();

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h3>Transactions</h3>
        <div>
          <Pagination
            totalCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
