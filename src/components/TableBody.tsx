import { useState } from "react";
import { Modal } from "./Modal";
import { Data } from "../types/data.type";
import { Column } from "../types/column.type";

interface TableBodyProps {
  // couldn't find a correct data type for this prop
  tableData: Data[] | ((sortField: any, sortOrder: any) => Data[]) | any;
  columns: Column[];
}

const TableBody: React.FC<TableBodyProps> = ({
  tableData,
  columns,
}: TableBodyProps) => {
  const [modal, setModal]: any = useState(false);
  const [user, setUser]: any = useState({});

  const handleClick = (id: string) => {
    const res = tableData.filter((item: any) => item._id === id);
    setModal(true);
    setUser(res[0]);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <>
      <tbody>
        {tableData.map((data: any) => {
          return (
            <tr key={data._id}>
              {columns.map(({ accessor }: any) => {
                const tData = data[accessor]
                  ? data[accessor].toString()
                  : "false";
                return (
                  <td key={accessor} onClick={() => handleClick(data._id)}>
                    {tData}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <Modal show={modal} handleClose={hideModal}>
        <p>id: {user?._id}</p>
        <p>Name: {user?.name}</p>
        <p>DOB: {user?.dob}</p>
        <p>Address:</p>
        <p>Street: {user?.address?.street}</p>
        <p>Town: {user?.address?.town}</p>
        <p>Postcode: {user?.address?.postcode}</p>
        <p>Telephone: {user.telephone}</p>
        <p>Pets: {user?.pets}</p>
        <p>Score: {user?.score}</p>
        <p>Email: {user?.email}</p>
        <p>URL: {user?.url}</p>
        <p>Description: {user?.description}</p>
        <p>Verified: {user?.verified ? "true" : "false"}</p>
        <p>Salary: {user?.salary}</p>
      </Modal>
    </>
  );
};

export default TableBody;
