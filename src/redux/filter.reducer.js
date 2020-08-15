const initialText = {
    text: ''
}

export default (state=initialText,action) => {
    switch(action.type){
        case 'SET_FILTER_TEXT':
            return{
                ...state,
                text: action.text
            }
        default: 
            return state;
    }
}