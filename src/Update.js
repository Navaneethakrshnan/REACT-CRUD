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
    if (validateForm()) {
      axios
        .put("http://localhost:3000/users/" + id, values)
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!values.name) {
      errors.name = "Name is Required";
      isValid = false;
    } else if (/\d/.test(values.name)) {
      errors.name = "Name should not contain digits";
      isValid = false;
    }

    if (!values.email) {
      errors.email = "Email is Required";
      isValid = false;
    } else if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is not valid";
      isValid = false;
    }

    if (!values.phone) {
      errors.phone = "PhoneNumber is Required";
      isValid = false;
    } else if (!values.phone || !/^\d{10}$/.test(values.phone)) {
      errors.phone = "Phone number is not valid (10 digits)";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <div className="bg-dark">
      <div
        className="d-flex w-100 vh-50 justify-content-center align-item-center bg-white"
        style={{ marginTop: "10%" }}
      >
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h1 className="text-center">Update User</h1>
          <form onSubmit={handleUpdate}>
            <div className="mb-2">
              <label htmlFor="name" className="fw-medium mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              ></input>
              {errors.name && (
                <p className="text-danger fw-medium mt-2">{errors.name}</p>
              )}
            </div>
            <div className="mb-2 ">
              {" "}
              <label htmlFor="name" className="fw-medium mb-2">
                Email:
              </label>
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
              {errors.email && (
                <p className="text-danger fw-medium mt-2">{errors.email}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="fw-medium mb-2">
                Phone:
              </label>
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
              {errors.phone && (
                <p className="text-danger fw-medium mt-2">{errors.phone}</p>
              )}
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
