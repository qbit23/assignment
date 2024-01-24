import Header from "./Header";
import TransactionTable from "./TransactionTable";
import { PaginationProvider } from "../../common/Pagination/PaginationContext";
const Transactions = () => {
  return (
    <div className="p-4 mx-auto">
      <PaginationProvider>
        <Header />
        <div className="max-h-[calc(100vh-10rem)] overflow-y-auto">
          <TransactionTable />
        </div>
      </PaginationProvider>
    </div>
  );
};

export default Transactions;
