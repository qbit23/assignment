import { useState } from "react"
import { Table,TableHeader,TableRow,TableBody,TableHead,TableCell } from "../../../common/Table"
import { tableData } from "../../../../constants/tableData"
import Portal from "../../../common/Portal"
import TransactionDescriptionModal from "../TransactionModals/TransactionDescriptionModal"

export default function TransactionTable() {
    const [transactionModal,setTransactionModal]=useState(false)
  return (
    <>
  <Table className="relative">
    <TableHeader>
        <TableRow className="relative">
            <TableHead className="sticky top-0 z-50">
                Date
            </TableHead>
        
            <TableHead className="sticky top-0">
                To/From
            </TableHead>
      
            <TableHead className="sticky top-0">
                Amount
            </TableHead>
      
            <TableHead className="sticky top-0">
                Account
            </TableHead>
        
            <TableHead className="sticky top-0">
                Payment Method
            </TableHead>
        </TableRow>
    </TableHeader>
    <TableBody >
        {
            tableData.map((data,index)=>({...data,id:index+1})).map(data=>(
                <TableRow key={data.id} className="hover:bg-[#F2F2F2] cursor-pointer " onClick={()=>setTransactionModal(true)}>
                    <TableCell>
                        {data.Date}
                    </TableCell>
                    <TableCell>
                        {data.To} {data.From}
                    </TableCell>
                    <TableCell>
                        {data.Amount}
                    </TableCell>
                    <TableCell>
                        {data.Account}
                    </TableCell>
                    <TableCell>
                        {data.PaymentMethod}
                    </TableCell>
                </TableRow>
            ))
        }
    </TableBody>
  </Table>
  {transactionModal&&<Portal>
    <TransactionDescriptionModal onClose={()=>setTransactionModal(false)}/>
  </Portal>}
    </>
  )
}
