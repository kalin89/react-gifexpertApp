import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p className="animate__fadeIn">loading</p>}
      <div className="card-grid">
        <ol>
          {data.map((image) => (
            <GifGridItem key={image.id} {...image} />
          ))}
        </ol>
      </div>
    </>
  );
};
