import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
} from "../../../common/Table";
import Portal from "../../../common/Portal";
import TransactionDescriptionModal from "../TransactionModals/TransactionDescriptionModal";
import { usePagination } from "../../../common/Pagination/PaginationContext";

const fetchData = async (
  currentPage: number,
  pageSize: number
): Promise<any> => {
  // Make your API call here and return the data
  const baseUrl = "http://localhost:8000/api/v1/transactions";
  const response = await fetch(
    `${baseUrl}?currentPage=${currentPage}&pageSize=${pageSize}`
  );
  console.log(response);
  const data = await response.json();
  console.log("data", data);
  return data;
};

function formatDate(inputDate: string) {
  const options: any = { month: "short", day: "numeric" };
  const date = new Date(inputDate);
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}

const headers: string[] = [
  "Date",
  "To/From",
  "Amount",
  "Account",
  "Payment Method",
];

interface TableDataItem {
  ID: string;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string;
  date: string;
  from: string;
  to: string;
  amount: number;
  account: string;
  bank_description: string;
  payment_method: string;
  payment_status: string;
}

export default function TransactionTable() {
  const [transactionModal, setTransactionModal] = useState(false);
  const { pageSize, currentPage, updatePaginationState } = usePagination();

  const [transactionData, setTableData] = useState<TableDataItem[]>([]);

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      const newData = await fetchData(currentPage, pageSize);
      setTableData(newData["data"]);
      updatePaginationState(newData["total_count"], newData["total_pages"]);
    };

    fetchDataAndSetData();
  }, [currentPage]);

  return (
    <>
      <Table className="relative">
        <TableHeader className="sticky top-0">
          <TableRow>
            {headers.map((item) => (
              <TableHead>{item}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactionData.map((data) => (
            <TableRow
              key={data.ID}
              className="hover:bg-[#F2F2F2] cursor-pointer "
              onClick={() => setTransactionModal(true)}
            >
              <TableCell>{formatDate(data.date)}</TableCell>
              <TableCell>
                To {data.to} from {data.from}{" "}
                {data.payment_status == "pending" ? (
                  <span className="text-xs border text-gray-400 border-gray-400 rounded-sm px-1">
                    {" "}
                    Pending
                  </span>
                ) : (
                  <></>
                )}
              </TableCell>
              <TableCell>${data.amount}</TableCell>
              <TableCell>{data.account}</TableCell>
              <TableCell>{data.payment_method}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {transactionModal && (
        <Portal>
          <TransactionDescriptionModal
            onClose={() => setTransactionModal(false)}
          />
        </Portal>
      )}
    </>
  );
}
