import { DownloadTableExcel } from "react-export-table-to-excel";
import Button from "../Button/Button";

function ExportTableToExcel({ tableRef }) {
  return (
    <>
      <DownloadTableExcel
        filename="users table"
        sheet="users"
        currentTableRef={tableRef.current}
      >
        <Button selectorName={"btn btn-success"} nameButton={"Export list to excel"} />
      </DownloadTableExcel>
    </>
  );
}
export { ExportTableToExcel };
