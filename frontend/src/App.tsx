import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./view/Dashboard";
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/transactions");
  }, [history]);

  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
