import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./views/Form";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Form/>} />
    </Routes>
  );
}

export default App;







