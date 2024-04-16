import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onCancel, onAdd}){

const title = useRef()
const description = useRef()
const date = useRef()
const modal = useRef()

function handleSave(){

const enteredTitle = title.current.value
const enteredDescription = description.current.value
const enteredDate = date.current.value

if(enteredTitle.trim() ==="" || 
enteredDescription.trim() ===""|| 
enteredDate.trim()===""){
    modal.current.open()
    return;
}

onAdd({
    title: enteredTitle,
    description: enteredDescription,
    date: enteredDate
})
}



    return (
        <div className="new-project">
            <h2>Create a project</h2>
            <div className="cancel-save">
            <button onClick={onCancel}>Cancel</button>
            <button onClick={handleSave}>Save</button>
            </div>
            <Modal ref={modal}>
                <h2>Error</h2>
                <p>You did not fill out all required entry fields.</p>
                <p>Ниси унео све потребне податке. </p>
                </Modal>
            <Input ref={title} label="Title"/>
            <Input ref={description} label="Description" textarea/>
            <Input ref={date} type="date" label="Date" />
        </div>
    )
}