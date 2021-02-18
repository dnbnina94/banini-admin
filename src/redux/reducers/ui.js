const initialState = {
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOADING_START':
            return {
                ...state,
                loading: true
            }
        case 'LOADING_STOP':
            return {
                ...state,
                loading: false
            }
        default: 
            return state;
    }
}