
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

const TodoTable = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");


  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchTodos();
  }, []);

   const getFilterTodos = () => {
    let result = todos;

    if (filter === "completed") result = result.filter((t) => t.completed);
    if (filter === "pending") result = result.filter((t) => !t.completed);
  
    if (search) {
      result = result.filter((t)=> 
      t.title.toLowerCase().includes(search.toLowerCase()));
    }
    return result;
   }
  const exportToExcel = () => {
    const filtered = getFilterTodos();

    // format data for excel
    const exportData = filtered.map(({ id, title, completed }) => ({
      ID: id,
      Title: title,
      Status: completed ? "Yes" : "No",
    }));

    // create new workbook
    const workbook = XLSX.utils.book_new();

    // convert json to sheet
    const worksheet = XLSX.utils.json_to_sheet(exportData);

    const coulumnWidth = [
      {wch:10},
      {wch:50},
      {wch:15}
    ]
    worksheet['!cols'] = coulumnWidth;

    // append worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Todos");

    // create file name with today's date
    const fileName = `Todo_Export_${new Date().toISOString().split("T")[0]}.xlsx`;

    // save file
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <button
          type="button"
          onClick={exportToExcel}
          style={{ marginBottom: "10px", padding: "8px 12px", cursor: "pointer" }}
        >
          📥 Export to Excel All Data
        </button>
      </div>
      <div>
        <button style={{ margin: "10px", padding: "8px 12px", cursor: "pointer",borderRadius:"5px" }} onClick={()=> setFilter("completed")}> Completed </button>
        <button style={{ margin: "10px", padding: "8px 12px", cursor: "pointer", borderRadius:"5px" }} onClick={() => setFilter("all")}> All </button>
        <button style={{ margin: "10px", padding: "8px 12px", cursor: "pointer", borderRadius:"5px" }} onClick={()=> setFilter("pending")}> Pending </button>
      </div>
      <div> 
        <input type="search" onChange={(e)=> setSearch(e.target.value)} value={search} placeholder="Title...." />
      </div>
      <h2>Todo List</h2>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Title</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {getFilterTodos().slice(0, 20).map((todo) => (
            <tr key={todo.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{todo.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{todo.title}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {todo.completed ? "✅ Completed" : "❌ Pending"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;







