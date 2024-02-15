import About from "./components/About";
import Banner from "./components/Banner";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import RoomAmenities from "./components/RoomAmenities";

function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <RoomAmenities />
      <About />
      <Booking />
      <Review />
      <Contact />
    </div>
  );
}

export default App;
