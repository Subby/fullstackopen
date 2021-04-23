const SET_FILTER_ACTION = 'SET_FILTER'

export const filterReducer = (state = '', action) => {
   switch(action.type) {
       case SET_FILTER_ACTION:
           return action.filter
       default:
           return state
   }
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER_ACTION,
        filter: filter
    }
}


