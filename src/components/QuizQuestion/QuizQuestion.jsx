import React, {useState} from 'react';
import styles from './QuizQuestion.module.scss';

const QuizQuestion = (props) => {
    const { validateAnswer, isCorrect } = props;
    const [answer, setAnswer] = useState("")

    const getFeedback = () => {
        if (isCorrect) {
            return <div className={`${styles.feedback} ${styles.feedbackValid}`}>Correct, well done!</div>
        } else if (isCorrect === false) {
            return <div className={`${styles.feedback} ${styles.feedbackInvalid}`}>Sorry, that's not correct - try again!</div>
        }
    };
    const getInputStyles = () => {
        if (isCorrect === true) {
            return styles.answerValid
        } else if (isCorrect === false) {
            return styles.answerInvalid
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        validateAnswer(answer)
    }

    return (
        <div>
            <h2 className={styles.question}>What do bees make?</h2>
            <form onSubmit={handleFormSubmit}>
                <input className={`${styles.answer} ${getInputStyles()}`} onKeyUp={(e) => setAnswer(e.target.value)} type="text" placeholder="Answer here" />
                <button type="submit">Check answer!</button>
            </form>
            { getFeedback() }
        </div>
    )
}

export default QuizQuestion
