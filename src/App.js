
import Navbar from "./components/Navbar";
import Navbar_mobile from "./components/Navbar_mobile";
import Login from './components/Login';
import Login_mobile from './components/Login_mobile';
import { useMediaQuery } from 'react-responsive';


function App() {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 844px)'});
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 844px)' })
  return (
    <div>
      {isDesktopOrLaptop && <Navbar />}
      {isTabletOrMobile && <Navbar_mobile />}
      {isDesktopOrLaptop && <Login />}
      {isTabletOrMobile && <Login_mobile />}
      
    </div>
  );
}

export default App;
