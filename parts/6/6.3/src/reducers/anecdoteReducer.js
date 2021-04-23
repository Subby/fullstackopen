const ACTION_VOTE = 'VOTE';
const ACTION_ADD = 'ADD';

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

export const anectodeReducer = (state = initialState, action) => {
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
      const content = action.data.content
      const newAnectode = asObject(content)
      return [
        ...state,
        newAnectode
      ]
    default:
      return state
  }
}

export const voteForAnecdoteId = (id) => {
  return {
    type: ACTION_VOTE,
    data: {
      id: id
    }
  }
}

export const createAnecdote = (content) => {
  return {
    type: ACTION_ADD,
    data: {
      content: content
    }
  }
}