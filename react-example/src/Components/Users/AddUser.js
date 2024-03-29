import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';
const AddUser = props => {
    const [enteredUsername, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError(
                {
                    title: "Invalid Input",
                    message: "Please eneter a valid name and age"
                }
            );
            return;
        }
        if (+enteredAge < 1) {
            setError(
                {
                    title: "Invalid Age ",
                    message: "Please enter a valid age"
                }
            );
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);

        setEnteredUserName("");
        setEnteredAge("");
    }
    const usernameChangleHandler = (event) => {
        setEnteredUserName(event.target.value);

    }
    const ageChangleHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangleHandler} />
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" type="Number" value={enteredAge} onChange={ageChangleHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}
export default AddUser;