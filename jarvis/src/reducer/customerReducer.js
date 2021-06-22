let INITIAL_STATE = {
    dataCustomer: [],
    dataCustomerById: [],
    errCustomer: []
}

const customerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "GET_CUSTOMER":
            return {
                ...state,
                dataCustomer: action.payload
            };
        case "GET_CUSTOMER_BY_ID":
            return {
                ...state,
                dataCustomerById: action.payload
            }
        case "CUSTOMER_ERR":
            return {
                ...state,
                errCustomer: action.payload
            };
        default:
            return state;
    }
}

export default customerReducer