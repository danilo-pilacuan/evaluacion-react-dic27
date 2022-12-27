import React, { createContext, FC, useContext } from "react";
import { Gif } from "../../utils/interfaces/Gif";
import useGif from "./use-gifs/use-gifs";

export interface GifStateContext {
  gifsList: Gif[];
  completedGifsList: Gif[];
  addGif: (url: string,author_id:number) => void;
  completeGif: (id: number) => void;
  deleteGif: (id: number) => void;
}

export interface GifProviderProps {
  children: React.ReactNode;
}

export const GifContext = createContext<GifStateContext>(
  {} as unknown as GifStateContext
);

export const useGifContext = () => useContext(GifContext);

export const GifProvider: FC<GifProviderProps> = ({ children }) => {
  const values = useGif();
  return <GifContext.Provider value={values}>{children}</GifContext.Provider>;
};
