import { useState } from "react";
import AddUser from "./AddUser";
import ViewUser from "./ViewUser";

function App() {
  const [alldata, setAlldata] = useState([]);
  const [edit, setEdit] = useState("");
  const [single, setSingle] = useState("");

  const Adduser = (data) => {
    setAlldata([...alldata, data]);
    alert("Data Inserted SuccessFully...");
    // console.log(data);
  };

  const DeleteUser = (id) => {
    const del = setAlldata(alldata.filter((item) => item.mainid != id));
    alert("Record Deleted successfully..");
  };

  const EditUser = (Id) => {
    setSingle(alldata.find((val) => val.mainid == Id));
    setEdit(Id);
    alert(Id);
  };

  const UpdateUser = (updateid) => {
    let up = alldata.map((val) => {
      if (val.mainid == updateid) {
        val.name == updateid.name, val.phone == updateid.phone;
      }
      return val;
    });

    setAlldata(up);
    alert("Record updated successfully..");
    setEdit("");
  };

  return (
    <>
      <AddUser
        adduser={Adduser}
        single={single}
        UpdateUser={UpdateUser}
        editid={edit}
      />
      <ViewUser alldata={alldata} DeleteUser={DeleteUser} EditUser={EditUser} />
    </>
  );
}

export default App;
