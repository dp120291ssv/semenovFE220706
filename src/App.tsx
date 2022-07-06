import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import ChartBar from "./components/ChartBar";
import data from './utils/utilsObj'

function App() {

    const [isCustom, setIsCustom] = useState(false);
    const [customCompleted, setCustomCompleted] = useState(0);

    const handleChangeData = useCallback(() => {
        setIsCustom(true);
        setCustomCompleted(Math.floor(Math.random() * 100) + 0.1)
    }, [])

    useEffect(() => {
        if (isCustom) {
            setInterval(() => setCustomCompleted(Math.floor(Math.random() * 100) + 0.1), 30000);
        }
    }, [isCustom])

    const title = {
        display: 'flex',
        justifyContent: 'flex-start'
    }

    const root = {
        padding: '50px'
    }

    const calcPercent = (time: any) => {
        return Math.floor(time * 100 / 18.4) + 0.1;
    }

    return (
        <>
            <div style={root}>
                <div>
                    <div>
                        <div style={title}>SPENT TIME (SECONDS)</div>
                        {data.map(item => {
                           return  <ChartBar bgColor={"#a1dad9"} completed={calcPercent(item.time)} isCustom={isCustom}
                                             customCompleted={customCompleted} itemTitle={item.name}/>
                        })}
                    </div>
                    <button onClick={handleChangeData}>Click Me</button>
                </div>
            </div>
        </>
    );
}

export default App;
