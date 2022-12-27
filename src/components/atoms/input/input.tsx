import React from "react";
import { FC } from "react";
import "./input.scss";

interface InputProps{
    value:string;
    name:string;
    placeholder:string;
    no_radius_right?:boolean;
    onChange: (value: string) => void;
}

const Input:FC<InputProps> = ({value,name,placeholder,onChange,no_radius_right}) =>{
    return <>
        <input className={`input ${no_radius_right?"input__no-radius-right":""}`} value={value} name={name} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}/>
    </>
}

export default Input;