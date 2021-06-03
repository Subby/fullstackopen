import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const newAnecdote = { content: content, votes: 1 }
    const response = await axios.post(baseUrl, newAnecdote)
    return response.data

}

const update = async (id, currentVotes) => {
    const response = await axios.patch(baseUrl + '/' + id, {votes: currentVotes})
    return response.data
}

export default {getAll, createNew, update}