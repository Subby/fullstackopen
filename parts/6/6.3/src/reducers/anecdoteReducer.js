import anedoteService from '../services/anecdotes'
import anecdoteService from "../services/anecdotes";

const ACTION_VOTE = 'VOTE';
const ACTION_ADD = 'ADD';
const ACTION_INIT = 'INIT';

export const anectodeReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case ACTION_VOTE:
      const id = action.data.id
      const votedForAnectode = state.find(anecdote => anecdote.id === id)
      const changedAnectode = {
        ...votedForAnectode,
        votes: votedForAnectode.votes + 1
      }
      return state.map((anecdote) => anecdote.id !== id ? anecdote : changedAnectode)
    case ACTION_ADD:
      const data = action.data
      return [
        ...state,
        data.content
      ]
    case ACTION_INIT:
      return action.data.content
    default:
      return state
  }
}

/*export const voteForAnecdoteId = (id) => {
  return {
    type: ACTION_VOTE,
    data: {
      id: id
    }
  }
}*/

export const voteForAnecdoteId = (id, votes) => {
  return async dispatch => {
    await anecdoteService.update(id, votes)
    dispatch({
      type: ACTION_VOTE,
      data: {
        id: id
      }
    });
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch({
      type: ACTION_ADD,
      data: {
        content: newAnecdote
      }
    });
  }
}



export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anedoteService.getAll();
    dispatch({
      type: ACTION_INIT,
      data: {
        content: anecdotes
      }
    })
  }
}