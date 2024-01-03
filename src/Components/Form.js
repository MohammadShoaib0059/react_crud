import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../ContextApi/HeaderContext";
const Form = () => {
  const navigate = useNavigate();
  const { addData, sortedData, editedData, setData } = useContext(GlobalContext);

  const [newData, setNewData] = useState({ id: null, first: '', last: '', email: '', phone: '', location: '', Position: '' });

  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  }

  const { id, first, last, email, phone, location, Position } = newData;

  useEffect(() => {
    if (editedData !== null) {
      setNewData(editedData)
    }
  }, [editedData])
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedData !== null) {
      const first = e.target.first.value;
      const last = e.target.last.value;
      const email = e.target.email.value;
      const phone = e.target.phone.value;
      const location = e.target.location.value;
      const Position = e.target.Position.value;
      const updatedData = sortedData.map((d) => d.id === editedData.id ? { ...d, first: first, last: last, email: email, phone: phone, location: location, Position: Position } : d)
      setData(updatedData);
    } else {
      addData(sortedData.length + 1, first, last, email, phone, location, Position);
    }
    navigate("/");
  }
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card w-50 p-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="first" className="form-label"> First Name </label>
                <input type="text" className="form-control" id="first" name="first" value={first} onChange={(e) => handleChange(e)} />
              </div>
              <div className="mb-3">
                <label htmlFor="last" className="form-label"> Last Name </label>
                <input type="text" className="form-control" id="last" name="last" value={last} onChange={(e) => handleChange(e)} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label"> Email </label>
                <input type="text" className="form-control" id="email" name="email" value={email} onChange={(e) => handleChange(e)} />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="phone" className="form-label"> Phone </label>
                <input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={(e) => handleChange(e)} />
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="form-label"> Location </label>
                <input type="text" className="form-control" id="location" name="location" value={location} onChange={(e) => handleChange(e)} />
              </div>
              <div className="mb-3">
                <label htmlFor="Position" className="form-label"> Position </label>
                <input type="text" className="form-control" id="Position" name="Position" value={Position} onChange={(e) => handleChange(e)} />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            {editedData !== null ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>

  );
}

export default Form;