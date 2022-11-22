import React from "react";
import { useState } from "react";

import FormTodo from './FormTodo';
import Task from "./Task";


const Container = () => {
    const [list, setList] = useState([]); 

    const addItem = addItem => {
        setList([...list,addItem])
    };

    return (
        <div className="App">
            <FormTodo addItem = {addItem}/>
            <Task list={list} setList={setList}/>
        </div>
    );
}

export default Container;