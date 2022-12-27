import React from "react";
import { FC } from "react";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import useAddGif from "./use-add-gif/use-add-gif";
import { useGifContext } from "../../../context/gifs-context/gifs-context";

interface InputGifProps{
    text: string
}

const InputGif:FC<InputGifProps> = ({text})=>{
    const { gifsList, completedGifsList, addGif } = useGifContext();
    const { url, handleChangeUrl, setUrl } = useAddGif();

    return <> 
        <Input value={url} name="img" placeholder="Gif Url" no_radius_right={true} onChange={handleChangeUrl}/>
        <Button text="Agregar" type="secondary" no_radius_left={true} onClick={() => {
            addGif(url,1002);
            setUrl("");
          }}/>

    </>
}

export default InputGif;