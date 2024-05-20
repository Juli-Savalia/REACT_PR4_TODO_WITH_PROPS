import React, { useEffect, useState } from "react";

const AddUser = ({ adduser, single, UpdateUser, editid }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    setName(single.name);
    setContact(single.contact);
  }, [single]);

  const handleEvent = (e) => {
    e.preventDefault();
    let obj = {
      mainid: Date.now(),
      name: name,
      contact: contact,
    };
    if (editid) {
      UpdateUser(obj);
    } else {
      adduser(obj);
    }
    adduser(obj);
    // console.log(obj);
    setName("");
    setContact("");
  };

  return (
    <div className="py-5 container">
      <h2 className="text-center fst-italic">Form</h2>
      {/* form */}
      <form align="center" className="col-5 mx-auto" onSubmit={handleEvent}>
        <label className="text-start fw-bold">Name:-</label>
        <input
          type="text"
          className="w-50 m-3"
          onChange={(n) => setName(n.target.value)}
          value={name || ""}
        />
        <br></br>
        <label className=" fw-bold">Contact:-</label>
        <input
          type="tel"
          className="w-50 m-3 "
          onChange={(c) => setContact(c.target.value)}
          value={contact || ""}
        />
        <br></br>
        <button
          type="submit"
          className="border-0 px-5 py-2 ms-5 rounded-pill fsw-bold bg-pink"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
