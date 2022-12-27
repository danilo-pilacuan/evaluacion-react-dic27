import React from "react";
import { FC } from "react";
import ImageCard from "../../molecules/imageCard/imageCard";
import "./imagesContainer.scss";
import {Gif} from "../../../utils/interfaces/Gif"
interface ImagesContainerProps{
    listaImagenes?:Gif[];
}

const listaImgs:Array<Gif>=[];



const ImagesContainer:FC<ImagesContainerProps> =({listaImagenes=[]})=>{
    if (listaImagenes.length === 0)
    return <h2 className="tasks-list__title">No posee Gifs</h2>;
  return (
    // <div className="tasks-list">
    <div >
        
      {listaImagenes?.map((imageItem, index) => (
        <ImageCard key={`card-${index}`} imageData={imageItem} />
      ))}
    </div>
  );

    // return <>
    //     <ImageCard url="https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif" />
    //   <ImageCard url="https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif" />
    //   <ImageCard url="https://media.tenor.com/Q4qyZizrNGMAAAAi/thor-love-and-thunder-marvel-studios.gif" />
    // </>
}

export default ImagesContainer;