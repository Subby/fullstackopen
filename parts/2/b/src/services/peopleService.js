import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl);

const addPerson = newPerson => axios.post(baseUrl, newPerson);

const deletePerson = id => axios.delete(baseUrl + '/' + id);

const updatePerson = (id, newPerson) => axios.put(baseUrl + '/' + id, newPerson);

export default {getAll, addPerson, updatePerson, deletePerson}