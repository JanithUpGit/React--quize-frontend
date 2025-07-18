import { useEffect, useState } from "react"

export default function QuestionTimer({ timeout, onTimeout ,mode}) {

    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return ()=>{
            clearTimeout(timer);
        }
    }, [timeout, onTimeout]);



    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100)
        }, 100)
        console.log("setintervle")

        return ()=>{
            clearInterval(interval);
            
            console.log("clearInterv");
        }
    }, []);



    return <>

        <progress id='question-time' max={timeout} value={remainingTime} className={mode}> </progress>

    </>
}