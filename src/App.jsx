import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import InfoPage from "./components/InfoPage";

function App() {
  const [query, setQuery] = useState("");
  const [img, setImg] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              <Main
                query={query}
                setQuery={setQuery}
                img={img}
                setImg={setImg}
              />
            }
          />

          <Route path="/:pokemon" element={<InfoPage img={img} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
