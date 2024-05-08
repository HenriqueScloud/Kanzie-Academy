import { useState } from "react";
import { FruitForm } from "../../components/FruitForm";
import { FruitList } from "../../components/FruitList";

export const HomePage = () => {
  return (
    <main>
      <FruitForm />
      <FruitList  />
    </main>
  );
};
