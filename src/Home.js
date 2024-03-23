import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100 ">
      <h1>List of Users</h1>
      <div className="W-75 rounded bg-white border shadow p-3">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={id}>
                <td>{(d, id)}</td>
                <td>{(d, name)}</td>
                <td>{(d, email)}</td>
                <td>{(d, phone)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
