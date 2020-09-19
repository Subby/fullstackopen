import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>;

const AnectodeOfTheDay = ({anecdotes, selected, votes, nextAnecdoteOnClick, voteAnecdoteOnClick}) => {
    return <>
            <h2>Anectode of the day</h2>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]}</p>
            <div>
                <Button text="next anectdote" onClick={nextAnecdoteOnClick}/>
                <Button text="vote" onClick={voteAnecdoteOnClick}/>
            </div>
        </>
};

const AnectodeWithMostVotes = ({quotes, votes}) => {
    const mostVotedValue = votes.reduce(function (a, b) {
       return Math.max(a, b);
    });
    const mostVotedIndex = votes.indexOf(mostVotedValue);

    return (
        <>
            <h2>Anectode with most votes</h2>
            <p>{quotes[mostVotedIndex]}</p>
            <p>has {votes[mostVotedIndex]} votes</p>
        </>
    )
};

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
    const nextAnecdoteOnClick = () => setSelected(Math.floor(Math.random() * (anecdotes.length - 1)));

    const voteAnecdoteOnClick = () => {
        const votesCopy = [...votes];
        votesCopy[selected] += 1;
        setVotes(votesCopy);
    };

    return (
        <>
            <AnectodeOfTheDay anecdotes={anecdotes}
                              selected={selected}
                              votes={votes}
                              nextAnecdoteOnClick={nextAnecdoteOnClick}
                              voteAnecdoteOnClick={voteAnecdoteOnClick}
            />
            <AnectodeWithMostVotes
                quotes={anecdotes}
                votes={votes}
            />
        </>
    )
};

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
);