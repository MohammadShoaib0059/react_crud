import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../ContextApi/HeaderContext";
const Table = () => {
    const { sortedData, deleteData, seteditedData } = useContext(GlobalContext);
    const navigate = useNavigate()

    const handelEditClick = (item) => {
        setTimeout(()=>{
            seteditedData(item)
        },3000)
        seteditedData(null);
        navigate("/form")
    }
    function handleAddClick(){
        seteditedData(null);
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h2>Employee Table</h2>
                </div>
                <div className="card-body">
                    <table className="table table-striped table-hover table-responsive">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First</th>
                                <th>Last</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Location</th>
                                <th>Position</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.length > 0 ? (
                                sortedData.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.first}</td>
                                        <td>{item.last}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.location}</td>
                                        <td>{item.Position}</td>
                                        <td>
                                            <button className="btn btn-warning me-2" onClick={() => handelEditClick(item)}>Edit</button>
                                            <button onClick={() => deleteData(item.id)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="text-center" colSpan={8}>
                                        No Data Available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer text-muted">
                    <Link to="/form" className="btn btn-success" onClick={handleAddClick}>
                        Add item
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Table;