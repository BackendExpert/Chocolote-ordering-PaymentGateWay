import { BrowserRouter, Route, Routes } from "react-router-dom";
import HoemPage from "./pages/HoemPage";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HoemPage /> }/>
      </Routes>
    </BrowserRouter>
  )
}