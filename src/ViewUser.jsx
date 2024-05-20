import React, { useState } from "react";

const ViewUser = ({ alldata, DeleteUser, EditUser }) => {
  const [viewuser, setViewuser] = useState([]);

  return (
    <div>
      {/* table */}
      <h3 className="text-center pb-3 fw-bold">View User</h3>
      <table className="mx-auto col-5 table table-danger table-striped table-hover text-center container">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CONTACT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        {alldata.map((val) => {
          return (
            <>
              <tbody key={val.mainid}>
                <tr>
                  <td>{val.mainid}</td>
                  <td>{val.name}</td>
                  <td>{val.contact}</td>
                  <td>
                    <button
                      onClick={() => DeleteUser(val.mainid)}
                      className="rounded-pill bg-white px-4 py-1 border-0 mx-3 delete"
                    >
                      Delete
                    </button>
                    ||
                    <button
                      onClick={() => EditUser(val.mainid)}
                      className="rounded-pill bg-white px-4 py-1 border-0 mx-3 edit"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default ViewUser;
