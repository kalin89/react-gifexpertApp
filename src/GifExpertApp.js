import React, { useState } from "react";
import { AddCAtegory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  const [categorias, setCategorias] = useState(["Dragon Ball"]);

  return (
    <>
      <h2>GiftExpertApp</h2>
      <hr />

      <AddCAtegory setCategorias={setCategorias} />

      <ol>
        {categorias.map((categoria) => (
          <GifGrid key={categoria} category={categoria} />
        ))}
      </ol>
    </>
  );
};
