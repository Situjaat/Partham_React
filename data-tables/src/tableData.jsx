import React from "react";
import DataTable from "react-data-table-component";

const TableExample = () => {
  // Table ke liye columns define karna padta hai
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
      sortable: true,   // sort enable
    },
    {
      name: "Name",
      selector: row => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: row => row.email,
    },
    {
      name: "Role",
      selector: row => row.role,
    },
  ];

  // Sample data
  const data = [
    { id: 1, name: "Situ Kumar", email: "situ@example.com", role: "Admin" },
    { id: 2, name: "Rahul Singh", email: "rahul@example.com", role: "User" },
    { id: 3, name: "Priya Sharma", email: "priya@example.com", role: "Editor" },
  ];

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">React Data Table Example</h2>
      <DataTable
        columns={columns}
        data={data}
        pagination          // ✅ page by page data
        highlightOnHover    // ✅ row highlight
        selectableRows      // ✅ checkbox select
      />
    </div>
  );
};

export default TableExample;
