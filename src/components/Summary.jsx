import quizCompleteImage from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js'
export default function Summary({ userAnswers }) {
    console.log(userAnswers);
    return <>
        <div id="summary">
            <img src={quizCompleteImage} alt='Trophy icon' />
            <h2>Quiz Completed</h2>
            <div id="summary-stats">
                <p>
                    <span className='number'>10%</span>
                    <span className='text'>skipped</span>
                </p>
                <p>
                    <span className='number'>10%</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>10%</span>
                    <span className='text'>answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    return (
                        <li key={answer}>
                            <h3>{index + 1}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            <p className='user-answer'>{answer}</p>
                        </li>
                    );
                })}
            </ol>


        </div>
    </>
}