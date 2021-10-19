
const iState = {
    name: "Store Data",
    objectData: { name: "ObjectStore data", id: "1" },
    arratStoreData: ["array store data 0 ", "arraystore data 1"],
}

export const firstreducers = (state = iState, action) => {
    console.log(action);
    console.log(state);
    if (action.type === "CHANGE_NAME") {
        return { ...state, name: action.payload }
    }
    return state;

}