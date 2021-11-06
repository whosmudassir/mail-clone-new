import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Inbox from "./pages/Inbox";
import Draft from "./pages/Draft";
import Spam from "./pages/Spam";
import Trash from "./pages/Trash";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Body />

        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="draft" element={<Draft />} />
          <Route path="spam" element={<Spam />} />
          <Route path="trash" element={<Trash />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
