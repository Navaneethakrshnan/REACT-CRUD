import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  // const [data, setData] = useState([]);
  const { id } = useParams();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {" "}
      <div
        className="d-flex w-100 vh-50 justify-content-center align-item-center bg-white"
        style={{ marginTop: "10%" }}
      >
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h1>Update User</h1>
          <form onSubmit={handleUpdate}>
            <div className="mb-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              ></input>
            </div>
            <div className="mb-2 ">
              {" "}
              <label htmlFor="name">Email:</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="name">Phone:</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Enter Phone"
                value={values.phone}
                onChange={(e) =>
                  setValues({ ...values, phone: e.target.value })
                }
              ></input>
            </div>
            <button className="btn btn-success me-3">Update</button>
            <Link to="/" className="btn btn-primary">
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
