import React, {useState} from "react";
import Card from  '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModel from "../UI/ErrorModel";


const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title:"Invalid Input",
        message: "Please enter a valid name and age (non-empty values)"
      })
      return;
    }
    if(+enteredAge < 1 ){
      setError({
        title:'Invalid Age',
        message:'Please enter a valid age (>0)'
      })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')

  };

  const usernameChangeHandler = event =>{
      setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = event =>{
      setEnteredAge(event.target.value)
  }

  const errorHandler= () =>{
    setError(null)
  }
    
  return (
    <div>
      {error && <ErrorModel onConfirm={errorHandler} title={error.title} message={error.message}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" 
          id="age" value={enteredAge} onChange={ageChangeHandler}/>
          <Button type="submit">Add User</Button>
        </form> 
      </Card>
    </div>
  );
};

export default AddUser;
