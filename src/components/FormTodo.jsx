import React, { useState } from "react";

const FormTodo = props => {
    const [description, setDescription] = useState("");

    const {addItem} = props;

    const handleSubmit = e => {
        e.preventDefault();
        console.log(description);
        setDescription("");

        addItem({
            done: false,
            id: (+new Date()).toString(),
            description

        })

        setDescription("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="todo-list">
                <div className="input">
                    <input
                        type="text"
                        classsName = ""
                        value={description}
                        onChange = {e => setDescription(e.target.value)}
                    />
                    <button
                        className="button pink"
                        disabled = {description ? "": "disabled"}
                    /*
                    if(Description  == ""){
                        disabled = "disables"
                    }else{
                        disabled = "enabled"
                    } */
                    
                    />
                </div>
            </div>
        </form>
    )
}


export default FormTodo;