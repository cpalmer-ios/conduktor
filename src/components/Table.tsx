import { useState, useMemo } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useSortableTable } from "../useSortableTable";

const Table = ({ caption, data, columns }: any) => {
  
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);

  const [tableData, handleSorting] = useSortableTable(data, columns, itemsPerPage, page);

  return (
    <>
      <table className="table">
        <caption>{caption}</caption>
        <TableHead {...{ columns, handleSorting }} />
        <TableBody {...{ columns, tableData }} />
      </table>
      <button onClick={() => setPage(page - 1)}> Prev Page </button>
      <button onClick={() => setPage(page + 1)}> Next Page </button>
    </>
  );
};

export default Table;