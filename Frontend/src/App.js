import Header from './components/header/Header';
import Custom from './components/custom/Custom'
import Beauty from './components/navbarComponent/Beauty';
import { Clearance } from './components/navbarComponent/Clearance';
import Clothing from './components/navbarComponent/Clothing';
import Handbags from './components/navbarComponent/Handbags';
import Jewelry from './components/navbarComponent/Jewelry';
import Shoe from './components/navbarComponent/Shoe';
import Sunglass from './components/navbarComponent/Sunglass';
import Under50 from './components/navbarComponent/Under50';

function App() {
  return <div className="App">
    <Header/>
    <Custom/>
    <Clothing/>
    {/* <Shoe/> */}
    {/* <Handbags/> */}
    {/* <Beauty/> */}
    {/* <Under50/> */}
    {/* <Sunglass/> */}
    {/* <Clearance/> */}
    <Jewelry/>
  </div>;
}

export default App;
