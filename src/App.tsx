import Table from "./components/Table";
import tableData1 from "./data/random-people-data.json";

const columns = [
  { label: "Name", accessor: "name", sortable: true },
  { label: "DOB", accessor: "dob", sortable: true, sortbyOrder: "desc" },
  { label: "Email", accessor: "email", sortable: false },
  { label: "Salary", accessor: "salary", sortable: true },
  { label: "Verified", accessor: "verified", sortable: false },
];

const App = () => {
  return (
    <div className="table_container">
      <Table
        caption="The table below is sortable by the Name, DOB or Salary Column with 10 items per page"
        data={tableData1.ctRoot}
        columns={columns}
      />
    </div>
  );
};

export default App;