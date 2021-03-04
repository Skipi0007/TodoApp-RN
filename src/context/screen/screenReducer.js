import { CHANGE_SCREEN } from "../todo/types"

const handlers = {
    [CHANGE_SCREEN]: (state, payload) => payload,
    DEFAUL: state => state
}

export const screenReducer = (state, action) => {
    const handler = handlers[action.type] || handler.DEFAUL
     return handler(state, action.payload)
}