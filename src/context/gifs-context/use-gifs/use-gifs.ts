import { Gif } from "./../../../utils/interfaces/Gif";
import { useState } from "react";

const useTodo = () => {
  const [gifsList, setGifsList] = useState<Gif[]>([]);
  const [completedGifsList, setCompletedGifsList] = useState<Gif[]>([]);

  const addGif = (url: string,author_id:number) => {
    const newGif: Gif = {
      id: Math.floor(Math.random() * 200),
      author_id: author_id,
      url:url
    };
    setGifsList([...gifsList, newGif]);
  };

  const deleteGif = (id: number) => {};

  const completeGif = (id: number) => {};

  return {
    gifsList,
    completedGifsList,
    addGif,
    deleteGif,
    completeGif,
  };
};

export default useTodo;
