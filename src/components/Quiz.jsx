
import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions";
import quizCompleteImage from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Quiz() {
    const shuffledAnswers = useRef(null);
    const [answerState, setAnswrState] = useState('');
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswrState('answered');
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswrState('correct');
            } else {
                setAnswrState('wrong');
            }
            setTimeout(() => {
                setAnswrState('');
            }, 2000)
        }, 1000)
    },
        [activeQuestionIndex]
    );

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return <div id="summary">
            <img src={quizCompleteImage} alt='Trophy icon' />
            <h2>Quiz Completed</h2>
        </div>
    }


    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return <>
        <div id='quiz'>
            <div id='question'>
                <QuestionTimer
                    key={activeQuestionIndex}
                    timeout={10000}
                    onTimeout={handleSkipAnswer}
                />
                <h2 >{QUESTIONS[activeQuestionIndex].text}</h2>
                <Answers
                    answers={QUESTIONS[activeQuestionIndex].answers}
                    selectedAnswer={userAnswers.length - 1}
                    answerState={answerState}
                />
            </div>
        </div>
    </>

}