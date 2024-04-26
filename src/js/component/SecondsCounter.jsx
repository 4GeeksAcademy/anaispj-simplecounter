import React, { useEffect, useState } from "react";

export const SecondsCounter = () => {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [status, setStatus] = useState({
        title: 'Clock',
        icon: "fa fa-clock",
        titleStyle: 'text-primary'

    })

    useEffect(() => {
        if (isRunning) {
            const newInterval = setInterval(() => {
                setCounter(counter => counter + 1)
            }, 10)
            return() => clearInterval(newInterval)
        }
    }, [isRunning])

    const handleStart = () => {
        setIsRunning(!isRunning)
        setStatus({
            title: 'Timer',
            icon: "fas fa-stopwatch",
            titleStyle: 'text-danger'
        })
    }


    const handleReset = () => {
        setCounter(0);
        setIsRunning(false);
        setStatus({
            title: 'Clock',
            icon: "fa fa-clock",
            titleStyle: 'text-primary'
        })
    }

    return (
        <div className="container-fluid">
            <h2>Esto es mi counter creado en mi componente</h2>
            <h3 className={status.titleStyle}>{status.title}</h3>
            <div className="big-counter">
                <div><i className={status.icon}></i></div>
                <div>{Math.floor(counter / 100000000 % 10)}</div>
                <div>{Math.floor(counter / 10000000 % 10)}</div>
                <div>{Math.floor(counter / 1000000 % 10)}</div>
                <div>{Math.floor(counter / 100000 % 10)}</div>
                <div>{Math.floor(counter / 10000 % 10)}</div>
                <div>{Math.floor(counter / 1000 % 10)}</div>
                <div>{Math.floor(counter / 100 % 10)}</div>
                <div>{','}</div>
                <div>{Math.floor(counter / 10 % 10)}</div>
                <div>{Math.floor(counter) % 10}</div>
            </div>
            <div className="d-grid gap-2 mt-3">
                <button onClick={handleStart} className={"btn btn-outline-success"} type="button">
                    {isRunning ? 'Pause' : counter === 0 ? 'Start' : 'Continue'}
                </button>
                <button onClick={handleReset} className="btn btn-outline-danger" type="button">Reset</button>
            </div>
        </div>
    )
}