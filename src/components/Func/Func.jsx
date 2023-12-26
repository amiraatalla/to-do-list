
import React, { useState } from 'react';

export default function Func() {
    let [myName, updatedName] = useState("Amira Atallah");
    let [count, setCount] = useState(0);
    function changeName() {
        updatedName("Amira Reda");
    }
    function changeCount() {
        setCount(Math.random() * 10);

    }
    return <>
        <h1>Function Component</h1>
        <h3>{myName}</h3>
        <button onClick={changeName}>changeName</button>
        <h3>{count}</h3>
        <button onClick={changeCount}>changeCount
        </button>
        <hr />
    </>

    //view->Hooks useState useEffect

}