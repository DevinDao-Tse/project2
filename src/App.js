import React,{Fragment, useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge)=>{
    setUsersList((prevUserList)=> {
      return [...prevUserList, {id: Math.random().toString() ,name: uName, age:uAge}]
    })
  }


  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
