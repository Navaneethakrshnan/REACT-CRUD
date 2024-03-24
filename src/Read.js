import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark">
      <div className="w-25 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h2 className="mb-3 text-center mt-3">User Details</h2>
        <div className="mb-2 text-center">
          <strong>Name: {data.name}</strong>
        </div>{" "}
        <div className="mb-2 text-center">
          <strong>Email: {data.email}</strong>
        </div>{" "}
        <div className="mb-4 text-center">
          <strong>Phone: {data.phone}</strong>
        </div>
        <div className="d-flex justify-content-center">
          <Link
            to={`/update/${id}`}
            className="btn btn-success fw-medium text-center align-middle"
          >
            Edit
          </Link>
          <Link
            to={"/"}
            className="btn btn-primary ms-3 fw-medium align-middle"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
