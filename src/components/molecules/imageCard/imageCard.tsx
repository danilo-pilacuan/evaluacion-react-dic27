import React from "react";
import { FC } from "react";
import Image from "../../atoms/image/image";
import Button from "../../atoms/button/button";
import { Gif } from "../../../utils/interfaces/Gif";
import "./imageCard.scss";

interface ImageCardProps{
    imageData:Gif
}

const ImageCard:FC<ImageCardProps> = ({imageData}) =>{
    return <div className="ImageCard">
        <Image url={imageData.url}/>
        <Button text="Eliminar" />
    </div>
}

export default ImageCard;