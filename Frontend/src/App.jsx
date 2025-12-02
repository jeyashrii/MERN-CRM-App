import { Routes, Route } from "react-router-dom";
import Delete from "./pages/Delete";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Show from "./pages/Show";
import Create from "./pages/Create";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/leads/details/:id" element={<Show />}></Route>
      <Route path="/leads/create" element={<Create />}></Route>
      <Route path="/leads/edit/:id" element={<Edit />}></Route>
      <Route path="/leads/delete/:id" element={<Delete />}></Route>
    </Routes>
  );
}

export default App;
