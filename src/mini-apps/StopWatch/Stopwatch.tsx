import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import style from "./Stopwatch.module.css";

const Stopwatch = () => {
    const [timer, setTimer] = useState(0);
    const timerRef = useRef<number>(Infinity);
    const [isRunning, setIsRunning] = useState(false);
    const [isReset, setIsReset] = useState(false);

    const prefixZero = (num: number) => {
        return num.toString().padStart(2, "0");
    };
    const formatTime = () => {
        const seconds = prefixZero(timer % 60);
        const minutes = Math.floor(timer / 60);
        const getMinutes = prefixZero(minutes % 60);
        const getHours = prefixZero(Math.floor(timer / 3600));

        return `${getHours} : ${getMinutes} : ${seconds}`;
    };
    const handleRunning = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            setIsRunning(false);
        } else {
            setIsRunning(true);
            setIsReset(false);
            timerRef.current = setInterval(() => {
                setTimer((timer) => timer + 1);
            }, 1000);
        }
    };

    const handleReset = () => {
        clearInterval(timerRef.current);
        setTimer(0);
        setIsReset(true);
        setIsRunning(false);
    };

    const runningText = isRunning ? "Pause" : timer === 0 ? "Start" : "Resume";
    return (
        <div className={style.stopwatchContainer}>
            <h2>Stopwatch</h2>
            <h1>{formatTime()}</h1>
            <div className={style.actions}>
                <Button onClick={handleRunning}>{runningText}</Button>
                {!isReset && isRunning && <Button onClick={handleReset}>Reset</Button>}
            </div>
        </div>
    );
};

export default Stopwatch;
