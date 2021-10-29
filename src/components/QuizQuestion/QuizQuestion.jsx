import React from 'react';
import styles from './QuizQuestion.module.scss';

const QuizQuestion = (props) => {
    const { validateAnswer, isCorrect } = props;
    const getFeedback = () => {
        if (isCorrect === true) {
            return <div className={`${styles.feedback} ${styles.feedbackValid}`}>Correct, well done!</div>
        } else if (isCorrect === false) {
            return <div className={`${styles.feedback} ${styles.feedbackInvalid}`}>"Sorry, that's not correct - try again!"</div>
        }
    };
    const getInputStyles = () => {
        if (isCorrect === true) {
            return styles.answerValid
        } else if (isCorrect === false) {
            return styles.answerInvalid
        }
    }

    return (
        <div>
            <h2 className={styles.question}>What do bees make?</h2>
            <input className={`${styles.answer} ${getInputStyles()}`} onKeyUp={(e) => validateAnswer(e.target.value)} type="text" placeholder="Answer here" />
            { getFeedback() }
        </div>
    )
}

export default QuizQuestion
