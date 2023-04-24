import React, { useState, useRef, Fragment } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./CreateUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [inputName, setInputName] = useState("");
    // const [inputAge, setInputAge] = useState("");
    const [error, setError] = useState();

    const createUserHandler = (event) => {
        event.preventDefault();
        const inputUserName = nameInputRef.current.value;
        const inputUserAge = ageInputRef.current.value;

        /* if(inputName.trim().length === 0 || inputAge.trim().length === 0) { */
        if(inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
            setError({
                title: "Incorrect enter",
                message: "These fields can not be empty"
            });
            return;
        }
        /* if(+inputAge < 1) { */
        if(+inputUserAge < 1) {
            setError({
                title: "Incorrect Age",
                message: "Age must be more than 0"
            });
            return;
        }
        //console.log(inputName, inputAge);
        /* props.onCreateUser(inputName, inputAge); */
        props.onCreateUser(inputUserName, inputUserAge);
        // setInputName("");
        // setInputAge("");
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    };

   /*  const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }; */

    /* const ageChangeHandler = (event) => {
        setInputAge(event.target.value);
    }; */

    const errorHandler = () => {
        setError(false);
    };

    return (
        <Fragment>
            {error && (
                <ErrorModal 
                    onCloseModal={errorHandler} 
                    title={error.title} 
                    message={error.message} 
                />
            )}
            <Card className={styles.input}>
                <form onSubmit={createUserHandler}>
                    <label htmlFor="name">Name</label>
                    <input 
                        id="name" 
                        type="text" 
                        // onChange={nameChangeHandler} 
                        // value={inputName}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input 
                        id="age" 
                        type="number" 
                        // onChange={ageChangeHandler} 
                        // value={inputAge}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
    );
};

export default CreateUser;