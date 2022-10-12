import React, { useEffect, useState} from "react";
import User from "./components/user/user";
import Adduser from "./components/user/Adduser";

function App() {

  let [user, setUser] = useState([]);
  let [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
    .then(res => res.json())
    .then(users => {
      let dusers = users.results;
      let filteredUser = dusers.map(u => {
        return {
          uuid: u.login.uuid,
          phone: u.phone,
          cell: u.cell,
          name: `${u.name.title} ${u.name.first} ${u.name.last}`,
          image: u.picture.thumbnail
        }
      })
      setUser(filteredUser)
    })
    .catch(err => console.log(err));

  },[])

  const userControl = (uuid) => {
   let remainUser = user.filter(usr => usr.uuid != uuid);
   setUser(remainUser)
  }
  const showFormHandler = () => {
    setShowForm(!showForm)
  }

  const addNewUser = (use) => {
    let newUser = [use, ...user]
    setUser(newUser)
    setShowForm(!showForm)
  }

  return (
      <div className="container my-5">
        <h1 className="text-center text-info" >Our Employee</h1>
        <button className="btn btn-primary btn-sm my-2" onClick={showFormHandler}>Add User</button>
        {showForm && <Adduser addUser= {addNewUser} />}
        {
          user.map(usr => <User key={usr.uuid} data={usr} remove={userControl} />)
        }
      </div>
  );
}

export default App;
