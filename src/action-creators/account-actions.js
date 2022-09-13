export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type : "DEPOSIT",
            payload : amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type : "WITHDRAW",
            payload : amount
        })
    }
}

export const resetValue = (amount) => {
    return (dispatch) => {
        dispatch({
            type : "RESET",
            payload : amount
        })
    }
}