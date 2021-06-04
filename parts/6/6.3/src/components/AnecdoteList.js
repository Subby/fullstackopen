import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {voteForAnecdoteId} from "../reducers/anecdoteReducer";
import {createNotification, destroyNotification} from "../reducers/notificationReducer";

export const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        if(state.filter === '') {
            return state.anecdotes
        } else {
            return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
        }
    })
    const dispatch = useDispatch()
    const displayNotification = (message) => {
        dispatch(createNotification(message))
    }
    const vote = async (anecdote) => {
        dispatch(voteForAnecdoteId(anecdote.id, anecdote.votes))
        displayNotification("You voted for " + anecdote.content)
    }
    return (
        <div>
            <h2>Anecdotes</h2>

            {anecdotes.length > 0 ? anecdotes.sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote)}>vote</button>
                        </div>
                    </div>
                ) :
            <p>No anecdotes found!</p>}
        </div>
    )
}