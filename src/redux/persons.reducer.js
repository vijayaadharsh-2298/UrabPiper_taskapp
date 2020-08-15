const initialPersonsState = []

export default (state=initialPersonsState,action) => {
    switch(action.type){
        case 'SET_DATA':
            return[
                ...state,
                action.data
            ]
        default:
            return state;
    }
}