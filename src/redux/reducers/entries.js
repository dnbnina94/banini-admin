const initialState = {
    entries: [],
    page: 0,
    perPage: 20
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ENTRIES':
            return {
                ...state,
                entries: action.entries
            }
        case 'SET_PAGE':
            return {
                ...state,
                page: action.page
            }
        default: 
            return state;
    }
}