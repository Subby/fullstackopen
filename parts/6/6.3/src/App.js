import React, {useEffect} from 'react'
import {AnecdoteForm} from "./components/AnecdoteForm";
import {AnecdoteList} from "./components/AnecdoteList";
import {Notification} from "./components/Notification";
import Filter from "./components/Filter";
import anedoteService from './services/anecdotes'
import {useDispatch} from "react-redux";
import {initAnecdotes} from "./reducers/anecdoteReducer";

const App = () => {
 const dispatch = useDispatch()
 useEffect(() => {
     anedoteService.getAll().then(notes => dispatch(initAnecdotes(notes)))
 })


  return (
    <div>
        <Notification/>
        <Filter/>
        <AnecdoteList/>
        <AnecdoteForm/>
    </div>
  )
}

export default App