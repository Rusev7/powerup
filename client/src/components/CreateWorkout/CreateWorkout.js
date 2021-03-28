import { useState } from 'react';

import './CreateWorkout.css';

import ExerciseForm from './ExerciseForm';

const CreateWorkout = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);

    const onCreateFormSubmitHandler = e => {
        e.preventDefault();
        console.log(e.target);

        setFormSubmitted(true);
    }

    return (
        <div className="create-form-container fade-in">
            <form className={`create-form  ${formSubmitted ? 'hide-create-form' : ''}`} onSubmit={onCreateFormSubmitHandler}>
                <h1 className="create-form-heading">Create a <span className="text-red">workout</span></h1>

                <label htmlFor="name" className="create-form-label margin-top-20">Workout name:</label>
                <input type="text" name="name" id="name" className="create-form-input" />

                <label htmlFor="personalWeight" className="create-form-label margin-top-20">Your weight:</label>
                <input type="number" name="personalWeight" id="personalWeight" className="create-form-input" />

                <input type="submit" value="start" className="create-form-btn margin-top-30"/>
            </form>

            {formSubmitted && <ExerciseForm />}
        </div>
        
    )
};

export default CreateWorkout;