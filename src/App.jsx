import { useLoaderData } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
function App() {
  const coffeeData = useLoaderData()
  console.log(coffeeData)
  return (
    <>
      <Home coffeeData={coffeeData} />
    </>
  );
}

export default App;
