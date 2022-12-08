import NavbarSample from "./component/NavbarSample";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="h-[300vh] bg-white">
      <NavbarSample />
      <hr />
      <Navbar />
    </div>
  );
};

export default App;