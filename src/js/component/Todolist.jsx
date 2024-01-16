import React, { useState } from "react";

export const Todolist = () => {

    // Estados
    const [activeIndex, setActiveIndex] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [tareas, setTareas] = useState([]);

    // Funciones

    function handleChange(event) { setInputValue(event.target.value) };

    function handleSubmit(event) {
        event.preventDefault()
        if (inputValue.trim() !== "") {
            setTareas([...tareas, inputValue.trim()])
            setInputValue("")
        }
    };

    function handleDelete(i) {
        const newList = [...tareas];
        newList.splice(i, 1);
        setTareas(newList);
    };

    function handleSelect(i) { setActiveIndex(i); };

    // HTML

    return (
        <div className="container">
            <h1 className="text-secondary text-center mt-5">Lista de tareas</h1>
            <div className="row d-flex justify-content-center">
                <form className="col-xs-auto col-md-6" onSubmit={handleSubmit}>
                    <input className="form-control" type='text' value={inputValue} onChange={handleChange} placeholder="Regar las plantas" />
                </form>
            </div>
            <div className="row d-flex justify-content-center">
                <ul className="col-xs-auto col-md-6 list-group mt-4">
                    {tareas.map((tarea, i) => (
                        <li className="list-group-item d-flex justify-content-between align-items-center text-wrap text-break" key={i} onMouseEnter={(index) => handleSelect(i)} onMouseLeave={() => handleSelect(null)}>
                            {tarea}
                            <button className={`btn btn-close${activeIndex === i ? '' : 'visually-hidden'}`} onClick={() => handleDelete(i)} key={i}></button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}