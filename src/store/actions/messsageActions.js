import axios from 'axios'
import * as Types from "../actions/types"

const sendMessage = (data) => dispatch => {
    axios.post('https://arbank-server.herokuapp.com/api/users/message', data)
        .then(res => {
            dispatch({
                type: Types.SET_MESSAGE,
                payload: res.data.message,
            })
        })
}

export {
    sendMessage
}