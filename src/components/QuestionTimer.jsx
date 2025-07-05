import { useEffect, useState } from "react"

export default function QuestionTimer({ timeout, onTimeout }) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        setTimeout(onTimeout, timeout);
        console.log("setTimeout");
    }, [timeout, onTimeout]);


    useEffect(() => {
        setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100)
        console.log("setintervle");

    }, []);



    return <>

        <progress id='question-time' max={timeout} value={remainingTime}> </progress>

    </>
}