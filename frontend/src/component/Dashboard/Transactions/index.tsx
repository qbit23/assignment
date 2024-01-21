import Header from "./Header"
import TransactionTable from "./TransactionTable"

const Transactions = () => {
  return (
    <div className="p-4 mx-auto">
      <Header />
      <div className="max-h-[calc(100vh-10rem)] overflow-y-auto">
      <TransactionTable />
      </div>
    </div>
  )
}

export default Transactions
