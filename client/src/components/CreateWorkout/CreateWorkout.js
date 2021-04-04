import { useState } from 'react';

import './CreateWorkout.css';

import { nameValidation, numberValidation } from '../../validation/validation';
import ExerciseForm from './ExerciseForm';
import ErrorNotification from '../ErrorNotification';

import { createWorkout } from '../../services/workoutService';

const CreateWorkout = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [workoutIdParam, setWorkoutIdParam] = useState('');

    const onCreateFormSubmitHandler = e => {
        e.preventDefault();
        console.log(e.target);

        const workoutName = nameValidation(e.target.name.value, 'Workout name');
        const personalWeight = numberValidation(e.target.personalWeight.value, 'Personal weight');

        if(!workoutName.validated) {
            setErrorMessage(workoutName.errorMsg);
        } else {
            if(!personalWeight.validated) {
                setErrorMessage(personalWeight.errorMsg);
            }
        }

        if(workoutName.validated && personalWeight.validated) {
            setErrorMessage('');

            const data = {
                workoutName: workoutName.input, 
                personalWeight: personalWeight.input
            }

            createWorkout(data, '60646e784ed576062ca61187')
                .then(res => res.json())
                .then(data => {
                    setWorkoutIdParam(data.workoutId);
                    setFormSubmitted(true);
                })
                .catch(err => setErrorMessage(err.errorMsg));
        }

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

                <ErrorNotification message={errorMessage} />
            </form>

            {formSubmitted && <ExerciseForm workoutId={workoutIdParam} />}
        </div>
        
    )
};

export default CreateWorkout;