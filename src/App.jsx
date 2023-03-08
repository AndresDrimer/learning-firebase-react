import { useState, useEffect } from "react";

import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(null);

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");

  const createUser = async (event) => {
    event.preventDefault();
    
    await addDoc(userCollectionRef, { name: newName, age: Number(newAge) });
    alert("documento agregado")
  };

  const updateAge = async (id, age) =>{
    const userDoc = doc(db, "users", id)
    const newFields = {age: age+1} 
    await updateDoc(userDoc, newFields)
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc)

  }
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
    };
    getUsers();
  }, []);


  return (
    <div className="App">
      <h1>React Firebase</h1>

      <div>
        <form>
          <label>
            name
            <input
              type="text"
              onChange={(event) => {setNewName(event.target.value)}}
            />
          </label>

          <label>
            age
            <input
              type="number"
              onChange={(event) => {setNewAge(event.target.value)}}
            />
          </label>

          <button onClick={createUser}>create</button>
        </form>
      </div>

      {users.map((it) => {
        return (
          <div key={it.id}>
            <h1 >Edad: {it.age}</h1>
            <button onClick={()=>{updateAge(it.id, it.age)}}> increase age</button>
            <button onClick={()=> {deleteUser(it.id)}}>delete user</button>
            <h1>Name: {it.name}</h1> 
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
