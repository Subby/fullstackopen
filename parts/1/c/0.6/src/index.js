import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>;

const Statistic = ({prefix, calculation, suffix}) => <p>{prefix} {calculation}{suffix}</p>;

const Statistics = ({good, bad, neutral}) => {

    const isFeedbackGiven = !(good === 0 && bad === 0 && neutral === 0);

    let statisticsOutput = <p>No feedback given</p>;

    if(isFeedbackGiven) {
        statisticsOutput = <table>
            <tr>
                <td>
                    <Statistic prefix="good" calculation={good} suffix=""/>
                </td>
            </tr>
            <tr>
                <td>
                    <Statistic prefix="neutral" calculation={neutral} suffix=""/>
                </td>
            </tr>
            <tr>
                <td>
                    <Statistic prefix="bad" calculation={bad} suffix=""/>
                </td>
            </tr>
            <tr>
                <td>
                    <Statistic prefix="all" calculation={good + neutral + bad} suffix=""/>
                </td>
            </tr>
            <tr>
                <td>
                    <Statistic prefix="average" calculation={(good + neutral + bad) / 3} suffix=""/>
                </td>
            </tr>
            <tr>
                <td>
                    <Statistic prefix="positive" calculation={(good / (good + neutral + bad))*100} suffix="%"/>
                </td>
            </tr>
        </table>;
    }

    return <section id="statistics">
        <h2>statistics</h2>
        {statisticsOutput}
    </section>
};



const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <section id="feedback">
                <h2>give feedback</h2>
                <Button onClick={() => setGood(good+1)} text="good"/>
                <Button onClick={() => setNeutral(neutral+1)} text="neutral"/>
                <Button onClick={() => setBad(bad+1)} text="bad"/>
            </section>
            <section id="statistics">
                <Statistics good={good} neutral={neutral} bad={bad}/>
            </section>
        </div>
    )
};

ReactDOM.render(<App />,
    document.getElementById('root')
);