import React from "react";
import { FC } from "react";
import "./button.scss"

interface ButtonProps{
    text:string,
    type?: "primary"|"secondary",
    no_radius_left?:boolean;
    onClick: () => void;
}

const Button:FC<ButtonProps> = ({text="",type="primary",no_radius_left=false,onClick})=>{
    return <>
    <button className={`button button__${type} ${no_radius_left?"button__no-radius-left":""}`}>{text}</button>
    </>
}

export default Button;