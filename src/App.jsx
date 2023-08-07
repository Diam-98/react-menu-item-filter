import { useState } from "react";
import "./App.css";
import MenuItem from "./components/MenuItem";
import { menu } from "./data/menu";

const allCategories = ["Tous", ...new Set(menu.map((item) => item.category))];

function App() {
  const [categories, setCategories] = useState(allCategories);
  return (
    <>
      <main>
        <h1>Notre menu</h1>
        <MenuItem categories={categories} />
      </main>
    </>
  );
}

export default App;
