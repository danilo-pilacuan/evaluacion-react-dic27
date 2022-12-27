import React from "react";
import { FC } from "react";
import "./button.scss"

interface ButtonProps{
    text:string,
    type?: "primary"|"secondary"
}

const Button:FC<ButtonProps> = ({text="",type="primary"})=>{
    return <>
    <button className={`button button__${type}`}>{text}</button>
    </>
}

export default Button;