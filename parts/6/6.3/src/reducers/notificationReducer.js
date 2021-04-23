const CREATE_ACTION = 'CREATE'
const DESTROY_ACTION = 'DESTROY'
export const notificationReducer = (state = '', action) => {
    switch(action.type) {
        case CREATE_ACTION:
            return action.message
        case DESTROY_ACTION:
            return ''
        default:
            return state
    }
}

export const createNotification = (message) => {
    return {
        type: CREATE_ACTION,
        message: message
    }
}

export const destroyNotification = () => {
    return {
        type: DESTROY_ACTION
    }
}