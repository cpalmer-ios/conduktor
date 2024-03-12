import React, { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useSortableTable } from "../useSortableTable";
import { Data } from "../types/data.type";
import { Column } from "../types/column.type";

interface TableProps {
  caption: string;
  data: Data[];
  columns: Column[];
}

const Table: React.FC<TableProps> = ({
  caption,
  data,
  columns,
}: TableProps) => {
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);

  const [tableData, handleSorting]: any[] = useSortableTable(
    data,
    columns,
    itemsPerPage,
    page
  );

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
