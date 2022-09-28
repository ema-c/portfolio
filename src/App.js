import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

