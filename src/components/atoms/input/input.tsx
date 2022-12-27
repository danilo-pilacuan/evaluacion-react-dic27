import React from "react";
import { FC } from "react";
import "./input.scss";

interface InputProps{
    value:string;
    name:string;
    placeholder:string;
}

const Input:FC<InputProps> = ({value,name,placeholder}) =>{
    return <>
        <input className={`input`} type="text" value={value} name={name} placeholder={placeholder} />
    </>
}

export default Input;