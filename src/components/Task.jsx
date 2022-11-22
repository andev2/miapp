import React from "react";
import CheckBox from './CheckBox'

const Task = props => {

    const [list, setList] = props;

    const onChangeStatus = e => {
        const {name, checked} = e.target;
        const updateList = list.map( item => ({
            ...item,
            done: item.id === name ? checked: item.done
        }));
        setList(updateList);
    };

    const checkbox = list.map(item => (

        <CheckBox key={item.id} data={item} onChange={onChangeStatus} />
    ));

    const onClikRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList)
    };

    return (
        <div className = "todo-list">

            {list.lenght ? checkbox: "no hay tareas"}
            {list.lenght ? (
                <p>
                    <button className="button pink" onChange=
                    {onClikRemoveItem} 
                    >Delete</button>
                    
                </p>
            ): null
            }
        </div>
    )
    
}

export default Task;