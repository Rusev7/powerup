import { useState } from 'react'
import { useHistory } from 'react-router-dom';

import { nameValidation, exerciseWeightValidation, numberValidation } from '../../../validation/validation';
import { pushExercise, pushDescriptionAndRating } from '../../../services/workoutService';

import ErrorNotification from '../../ErrorNotification';

import './ExerciseForm.css';

const ExerciseForm = ({
    workoutId
}) => {
    const [data, setData] = useState([
        { reps: 0, weight: 0 },
    ])

    const [errorMessage, setErrorMessage] = useState('');
    const [finishedWorkout, setFinishedWorkout] = useState(false);
    const [showNext, setShowNext] = useState(false);
    const [rating, setRating] = useState(null);
    const history = useHistory();

    const onExerciseFormSubmitHandler = (e) => {
        e.preventDefault();


        if (!showNext) {
            const exerciseName = nameValidation(e.target.exerciseName.value, 'Exercise name');
            const isValidData = data.every(item => {
                if (!numberValidation(item.reps).validated) {
                    return false;
                }

                if (!exerciseWeightValidation(item.weight).validated) {
                    return false;
                }

                return true;
            });

            if (exerciseName.validated) {
                if (isValidData) {
                    const dataBody = {
                        workoutId: workoutId,
                        exerciseName: exerciseName.input,
                        exerciseSets: data,
                    }

                    pushExercise(dataBody)
                        .then(res => res.json())
                        .then(() => {
                            setErrorMessage(null);

                            if (finishedWorkout) {
                                setShowNext(true);
                            } else {
                                e.target.exerciseName.value = '';
                                setData([{ reps: 0, weight: 0 }]);
                            }
                        });

                } else {
                    setErrorMessage('Invalid weight / reps value! (For the weight you can put number or "bodyweight")');
                }
            } else {
                setErrorMessage(exerciseName.errorMsg);
            }
        } else {
            const descriptionInput = e.target.description;
            let description = descriptionInput.value;

            if(description === '' || !description) {
                description = null;
            }

            let body = {
                workoutId: workoutId,
                description,
                rating
            }

            pushDescriptionAndRating(body)
                .then(() => {
                    setErrorMessage(null);
                    history.push('/');
                })
                .catch(err => setErrorMessage(err.message.errorMsg));
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
            {!showNext && <>

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
                    <input type="submit" value="Next exercise" className="create-form-btn" />
                    <input type="submit" onClick={() => setFinishedWorkout(true)} value="Finish workout!" className="create-form-btn filled-btn" />
                </div>
            </>}

            {showNext && <>
                <h1 className="create-form-heading">Describe how you feel today:</h1>
                <textarea name="description" className="create-form-description"></textarea>
                <div className="rating-container">
                    <img src="/rating-1.png" alt="bad" onClick={() => setRating(1)} className={`emoji-rating ${rating === 1 ? 'emoji-active' : ''}`} />
                    <img src="/rating-2.png" alt="ok" onClick={() => setRating(2)} className={`emoji-rating ${rating === 2 ? 'emoji-active' : ''}`} />
                    <img src="/rating-3.png" alt="good" onClick={() => setRating(3)} className={`emoji-rating ${rating === 3 ? 'emoji-active' : ''}`} />
                    <img src="/rating-4.png" alt="very good" onClick={() => setRating(4)} className={`emoji-rating ${rating === 4 ? 'emoji-active' : ''}`} />
                </div>

                <input type="submit" value="Submit" className="create-form-btn" />
            </>}


            <ErrorNotification message={errorMessage} />
        </form>
    )
};

export default ExerciseForm;