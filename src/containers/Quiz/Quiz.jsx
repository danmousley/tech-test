import React, { useState } from 'react';
import styles from './Quiz.module.scss';
import QuizQuestion from '../../components/QuizQuestion';

const Quiz = () => {
    const [isCorrect, setIsCorrect] = useState(false)
    
    const validateAnswer = (answer) => {
        if (answer.toLowerCase() === "honey") {
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>One-Question Quiz</h1>
            <div className={styles.question}>
                <QuizQuestion isCorrect={isCorrect} validateAnswer={validateAnswer}/>
            </div>
        </div>
    )
}

export default Quiz
