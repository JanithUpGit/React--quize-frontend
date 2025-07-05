import { useEffect, useState } from "react"

export default function QuestionTimer({ timeout, onTimeout }) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        setTimeout(onTimeout, timeout);
        console.log("setTimeout")
    }, [timeout, onTimeout]);


    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100)
        console.log("setintervle")

        return ()=>{
            clearInterval(interval);
            setRemainingTime(timeout);
            console.log("clearInterv")
        }
    }, [onTimeout]);



    return <>

        <progress id='question-time' max={timeout} value={remainingTime}> </progress>

    </>
}