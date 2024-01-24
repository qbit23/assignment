import { useEffect } from "react";
import Icon from "../../../common/Icon";
import { TableDataItem } from "../TransactionTable";

function getOrdinalSuffix(day: number) {
  if (day >= 11 && day <= 13) {
    return day + "th";
  } else {
    switch (day % 10) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      case 3:
        return day + "rd";
      default:
        return day + "th";
    }
  }
}

function parseDateString(dateString: string) {
  const date = new Date(dateString);

  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const day = getOrdinalSuffix(date.getDate());
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const formattedString = `${month} ${day} at ${hours}:${minutes}`;
  return formattedString;
}

interface TransactionDescriptionModalProps {
  dataItem: TableDataItem;
  onClose: () => void;
}

export const TransactionDescriptionModal: React.FC<
  TransactionDescriptionModalProps
> = ({ dataItem, onClose }) => {
  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="bg-white border rounded-lg divide-y-2 min-w-[25rem]">
        <div className="px-5 py-3">
          <div className="flex justify-between">
            <p>Transfer</p>
            <Icon name="close" onClick={onClose} />
          </div>
          <div className="px-5 py-3">
            <div className="text-4xl relative">
              <span className="font-semibold ">
                ${Math.floor(dataItem.amount)}
              </span>
              <span className="text-lg align-top">
                {(dataItem.amount % 1).toFixed(2).substring(1)}
              </span>
            </div>
            <div className="m-2">
              <div>
                <p className="font-semibold">From {dataItem.from}</p>
                <p className="text-sm text-gray-500">
                  {dataItem.payment_method}
                </p>
                <p className="text-sm text-gray-500">
                  {parseDateString(dataItem.date)}
                </p>
              </div>
              <div>
                <p className="font-semibold">To {dataItem.to}</p>
                <span className="text-sm text-gray-500">
                  {dataItem.payment_method}
                </span>
                <p className="text-sm text-gray-500">
                  {parseDateString(dataItem.date)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-3">
          <div>
            <p className="text-gray-500">Notes</p>
            <textarea
              placeholder="Add a note"
              className="w-full h-15 p-2 m-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
            <label htmlFor="fileInput" className="cursor-pointer text-gray-500">
              {" "}
              + Add an Attachment
            </label>
            <input id="fileInput" type="file" className="hidden" />
          </div>
          <div className="mb-5">
            <p className="text-gray-500 mt-5">Bank Description</p>
            <p>{dataItem.bank_description}</p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};
