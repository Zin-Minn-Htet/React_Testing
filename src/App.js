import React, { useState } from "react";
import User from "./components/user/user";

function App() {

  let users = [
    {
      id:1,
      image:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png",
      phone: "09797134",
      cell: "09100100",
      name: "Mg Mg"
    },
    {
      id:2,
      image:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png",
      phone: "09159779",
      cell: "09200200",
      name: "Su Su"
    },
    {
      id:3,
      image:"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png",
      phone: "09816735",
      cell: "09300300",
      name: "Aung Gyi"
    },
  ]

  let [count, setCount] = useState(5);
  let [name, setName] = useState("Aung Aung")

  return (
      <div className="container mt-5">
        {/* <User image={users[0].image} phone= {users[0].phone} cell= {users[0].cell} name= {users[0].name} />
        <User image={users[1].image} phone= {users[1].phone} cell= {users[1].cell} name= {users[1].name} /> */}

        <h4>{count}</h4>
        <h4>{name}</h4>

        <button className="btn btn-primary btn-sm my-4" onClick={()=>{
          setCount(++count);
          setName(name === "Aung Aung" ? "Su Su" : "Aung Aung")
          console.log("Count is",count);
        }}>Count</button>

        {users.map(u => <User key={u.id} data={u} />)}
        
      </div>
  );
}

export default App;
