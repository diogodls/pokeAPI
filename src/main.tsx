import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router';
import './index.css';
import App from "./App.tsx";
import Home from "./pages/Home/Home.tsx";
import {FilterProvider} from "./context/Filters/FilterContext.tsx";
import Pokemon from "./pages/View/Pokemon.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <Routes>
          <Route element={<App />}>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/pokemon/:name'} element={<Pokemon />}/>
          </Route>
        </Routes>
      </FilterProvider>
    </BrowserRouter>
  </StrictMode>,
)
