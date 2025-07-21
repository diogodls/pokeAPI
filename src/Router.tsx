import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home.tsx";
import Pokemon from "./pages/pokemon/Pokemon.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path={''} element={<Home />} />
      </Route>
      <Route path="/a" element={<Pokemon />} />
    </Routes>
  </BrowserRouter>
);
