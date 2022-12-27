import React from "react";
import { FC } from "react";
import InputGif from "../../molecules/inputGif/inputGif";
import ImagesContainer from "../../organisms/imagesContainer/imagesContainer";



const TemplateGifs:FC<any> = ()=>{
    return <>
        <InputGif text='hello'/>
    <ImagesContainer/>
    </>
}

export default TemplateGifs;