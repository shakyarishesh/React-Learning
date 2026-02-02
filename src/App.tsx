import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reactreact from "./components/Reactreact";
import Message from "./Message";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Reactreact />} />
        <Route path="/yes" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
