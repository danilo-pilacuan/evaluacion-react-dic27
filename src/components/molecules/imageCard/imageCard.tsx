import React from "react";
import { FC } from "react";
import Image from "../../atoms/image/image";
import Button from "../../atoms/button/button";
import "./imageCard.scss";

interface ImageCardProps{
    url:string
}

const ImageCard:FC<ImageCardProps> = ({url}) =>{
    return <div className="ImageCard">
        <Image url={url}/>
        <Button text="Eliminar" />
    </div>
}

export default ImageCard;