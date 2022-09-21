import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const state = {
        "text": "Hello"
    }
    return (
        <NoteContext.Provider value = {state}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;