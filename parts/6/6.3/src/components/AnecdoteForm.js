import React from 'react'
import {createAnecdote} from "../reducers/anecdoteReducer";
import {useDispatch} from "react-redux";
import anecdoteService from '../services/anecdotes'

export const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = async (event) => {
        event.preventDefault()
        const anecdoteContent = event.target.content.value
        event.target.content.value = ''
        const newAnecdote = await anecdoteService.createNew(anecdoteContent);
        dispatch(createAnecdote(newAnecdote))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={create}>
                <div><input name="content"/></div>
                <button type="submit">create</button>
            </form>
        </div>
    )

}