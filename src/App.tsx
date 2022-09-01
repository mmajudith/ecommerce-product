import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Sneakers from "./pages/sneakers/Sneakers";

const App = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
      window.addEventListener('resize', () => setScreenWidth(window.innerWidth))

      return window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
  }, [screenWidth]);

  return (
    <div className='w-full h-screen mx-auto'>
      <Header screenWidth={screenWidth}/>
      <Sneakers screenWidth={screenWidth}/>
    </div>
  );
}

export default App;
