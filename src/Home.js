import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Would you like to Delete");
    if (confirmDelete) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>List of Users</h1>
      <div
        className="w-75 rounded border shadow p-3"
        style={{
          backgroundColor: "#fff",
          height: "500px",
          overflowY: "scroll",
        }}
      >
        <div className="d-flex justify-content-end">
          <Link
            to="/create"
            className="btn fw-medium"
            style={{ backgroundColor: "#637A9F", color: "#fff" }}
          >
            Add ➕
          </Link>
        </div>
        <table className="table table-striped rounded-2 p-4">
          <thead>
            <tr>
              {/* <th className="g-col-6">ID</th> */}
              <th className="text-center">NAME</th>
              <th className="text-center">EMAIL</th>
              <th className="text-center">PHONE</th>
              <th className="text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                {/* <td>{d.id}</td> */}
                <td className="text-center">{d.name}</td>
                <td className="text-center">{d.email}</td>
                <td className="text-center">{d.phone}</td>
                <td className="text-center">
                  <Link
                    to={`/read/${d.id}`}
                    className="btn btn-sm me-3 fw-medium"
                    style={{ backgroundColor: "#fcd34d" }}
                  >
                    Read
                  </Link>
                  <Link
                    to={`/update/${d.id}`}
                    className="btn btn-sm btn-dark me-3 fw-medium"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={(e) => handleDelete(d.id)}
                    className="btn btn-sm btn-danger fw-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
