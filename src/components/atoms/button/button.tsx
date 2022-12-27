import React from "react";
import { FC } from "react";
import "./button.scss"

interface ButtonProps{
    text:string,
    type?: "primary"|"secondary",
    no_radius_left?:boolean
}

const Button:FC<ButtonProps> = ({text="",type="primary",no_radius_left=false})=>{
    return <>
    <button className={`button button__${type} ${no_radius_left?"button__no-radius-left":""}`}>{text}</button>
    </>
}

export default Button;