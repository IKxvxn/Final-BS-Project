

const DEFAULT_STATE = {
    login: {
        _id:"Rodney",
        password:"asd",
        dbName:"1234DB"
    }
}

const loginReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'USER_CREATE_SUCCESS':
            return {login: action.user}
        default:
            return state
            
    }

}

export default loginReducer