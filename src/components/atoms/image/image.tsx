import React from "react";
import { FC } from "react";
import "./image.scss";

interface ImageProps{
    url:string;

}

const Image:FC<ImageProps> = ({url})=>{
    return <>
        <img src={url} alt="" className={`image`}/>
    </>
}

export default Image; 