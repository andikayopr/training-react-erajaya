const initialState = {
    profile : "",
    phone: "+62849839489384",
    nama: ""
}

export const aboutReducer = (state = initialState, action) => {
    console.log("run reducer about")
    if (action.type === "SET_DATA_PROFILE") {
        return {
            ...state,
            nama: action.nama,
            phone: action.phone
        }
    }

    return {
        ...state
    };
}