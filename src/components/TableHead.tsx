import { useState } from "react";
import { Column } from "../types/column.type";

interface TableHeadProps {
  columns: Column[];
  handleSorting: ((sortField: any, sortOrder: any) => void)
}


const TableHead = ({ columns, handleSorting }: TableHeadProps) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, sortable }) => {
          const cl = sortable
            ? sortField === accessor && order === "asc"
              ? "up"
              : sortField === accessor && order === "desc"
              ? "down"
              : "default"
            : "";
          return (
            sortable ? (
            <th
            key={accessor}
            onClick={() => handleSortingChange(accessor)}
              className={cl}
            >
              {label}
            </th>
            ) : (
              <th
              key={accessor}
                className={cl}
              >
                {label}
              </th>
            )

          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;