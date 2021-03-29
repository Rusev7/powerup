import { useState } from 'react'
import { useHistory } from 'react-router-dom';

import { nameValidation, exerciseWeightValidation, numberValidation} from '../../../validation/validation';
import {  } from '../../../services/workoutService';

import ErrorNotification from '../../ErrorNotification';

import './ExerciseForm.css';

const ExerciseForm = ({
    workoutId
}) => {
    const [data, setData] = useState([
        { reps: 0, weight: 0 },
    ])

    const [errorMessage, setErrorMessage] = useState('');

    const onExerciseFormSubmitHandler = (e) => {
        e.preventDefault();

        const exerciseName = nameValidation(e.target.exerciseName.value, 'Exercise name');
        const isValidData = data.every(item => {
            if(!numberValidation(item.reps).validated) {
                return false;
            }

            if(!exerciseWeightValidation(item.weight).validated) {
                return false;
            }

            return true;
        });

        if(exerciseName.validated) {
            if(isValidData) {
                
            } else {
                setErrorMessage('Invalid weight / reps value! (For the weight you can put number or "bodyweight")');
            }
        } else {
            setErrorMessage(exerciseName.errorMsg);
        }
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;

        const list = [...data];

        list[index][name] = value;

        setData(list);
    }

    const handleAddRow = () => {
        setData([...data, { reps: 0, weight: 0 }]);
    }

    const handleRemoveRow = index => {
        const list = [...data];
        
        list.splice(index, 1);

        setData(list);
    }

    return (
        <form className="create-form" onSubmit={onExerciseFormSubmitHandler}>
            <h1 className="create-form-heading">Add an <span className="text-red">exercise</span></h1>

            <label htmlFor="exerciseName" className="create-form-label margin-top-20">Exercise name:</label>
            <input type="text" name="exerciseName" id="exerciseName" className="create-form-input" />

            {data.map((row, i) => {
                return (
                    <div key={i} className="inputs-row">
                        <span className="exercise-form-span">Set {i + 1}</span>

                        <label htmlFor="reps" className="create-form-label">Reps:</label>
                        <input 
                            type="number" 
                            name="reps"
                            id="reps"
                            className="create-form-input margin-left-10"
                            value={row.reps}
                            onChange={e => handleChange(e, i)}
                        />

                        <label htmlFor="weight" className="create-form-label margin-left-20">Weight:</label>
                        <input
                            type="text"
                            name="weight"
                            id="weight"
                            className="create-form-input margin-left-10"
                            value={row.weight}
                            onChange={e => handleChange(e, i)}
                        />

                        {data.length - 1 === i && <input
                            type="button"
                            onClick={handleAddRow}
                            value="Add set"
                            className="exercise-form-btn"
                        />}

                        {data.length !== 1 && <input
                            type="button"
                            onClick={() => handleRemoveRow(i)} 
                            value="Remove set" 
                            className="exercise-form-btn"
                        />}
                    </div>
                )
            })}
            
            <div className="btns-row">
                <input type="submit" value="Next exercise" className="create-form-btn"/>
                <input type="submit" value="Finish workout!" className="create-form-btn filled-btn"/>
            </div>

            <ErrorNotification message={errorMessage}/>
        </form>
    )
};

export default ExerciseForm;