import React, {useState, useRef} from "react";
import Card from  '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModel from "../UI/ErrorModel";
import Wrapper from '../Helpers/Wrapper'


const AddUser = (props) => {

  const nameInputRef = useRef()
  const ageInputRef = useRef()

  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value
    const enteredAge = ageInputRef.current.value

    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
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
    props.onAddUser(enteredName, enteredAge)
    //rarely use refs to manipulate data, mainly to read
    //preferably use the state to handle data
    nameInputRef.current.value=''
    ageInputRef.current.value=''

  };


  const errorHandler= () =>{
    setError(null)
  }
    
  return (
    <Wrapper>
      {error && <ErrorModel onConfirm={errorHandler} title={error.title} message={error.message}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            ref={nameInputRef}
             />
          <label htmlFor="age">Age (Years)</label>
          <input 
            type="number" 
            id="age" 
            ref={ageInputRef}
            />
          <Button type="submit">Add User</Button>
        </form> 
      </Card>
    </Wrapper>
  );
};

export default AddUser;
