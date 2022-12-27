import React from "react";
import { FC } from "react";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";

interface InputGifProps{
    text: string
}

const InputGif:FC<InputGifProps> = ({text})=>{
    return <> 
        <Input value="GIF URL" name="sda" placeholder="123" no_radius_right={true}/>
        <Button text="Agregar" type="secondary" no_radius_left={true}/>
    </>
}

export default InputGif;