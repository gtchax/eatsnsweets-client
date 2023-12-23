import AppRouter from "./router";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function EatsAndSweets() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<AppRouter />} />
    </Routes>
  </BrowserRouter>
  )
}




export default EatsAndSweets;
