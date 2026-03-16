export default function picturesReducer(state, action) {
    switch (action.type) {
        case "GET_ALL":
            return Object.values(action.payload.pictures);
        case "REMOVE":
            return state.filter((pic) => pic._id !== action.payload)
        default:
            return state
    }
}