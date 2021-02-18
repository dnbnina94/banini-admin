const initialState = {
    date: new Date(),
    disqual: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DATE':
            return {
                ...state,
                date: action.date
            }
        case 'SET_DISQUAL':
            return {
                ...state,
                disqual: action.disqual
            }
        default: 
            return state;
    }
}