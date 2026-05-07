
import { Route , Routes } from "react-router-dom";
import Main from "./components/Main";
import Home from "./pages/Home";
import Banquets from "./pages/Banquets";
import Catering from "./pages/Catering";
import OurStory from "./pages/OurStory";
import Events from "./pages/Events";
import GeneralTerm from "./pages/GeneralTerm";
import GiftCards from "./pages/GiftCards";
import Hiring from "./pages/Hiring";
import SignIn from "./pages/SignIn";
import Menu from "./pages/Menu";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="Banquets" element={<Banquets />} />
          <Route path="Catering" element={<Catering />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="events" element={<Events />} />
          <Route path="terms" element={<GeneralTerm />} />
          <Route path="giftcards" element={<GiftCards />} />
          <Route path="hiring" element={<Hiring />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
