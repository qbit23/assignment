import Icon from "../../../common/Icon";

export default function TransactionDescriptionModal({onClose}:any) {
  return (
    <div className="flex h-full w-full justify-center items-center">
        <div className="bg-white  border rounded-lg divide-y-2 min-w-[25rem]">
            <div className="px-5 py-3">
            <div className="flex justify-between">
                <p>Transfer</p>
                <Icon name="close" onClick={onClose}/> 
            </div>
            <div className="px-5 py-3">
                <h4>54000</h4>

                <div>
                    <div>
                        <p>From AR</p>
                        <p>Mercury Checking</p>
                        <p>Oct 10 at </p>
                    </div>
                    <div>
                        <p>From AR</p>
                        <p>Mercury Checking</p>
                        <p>Oct 10 at </p>
                    </div>
                </div>
            </div>
            </div>

            <div className="px-5 py-3">
                    <p>Notes</p>

<div>
<p>Bank Description</p>
                    <p>Mercury</p>
</div>
                  
            </div>
        
            <div>

            </div>
        </div>
    </div>
  )
}
