import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import SaveTheDate from "./components/SaveTheDate";
import PersonalMessage from "./components/PersonalMessage";
//import FamilyDetails from "./components/FamilyDetails";
import EventTimeline from "./components/EventTimeline";
import VenueSection from "./components/VenueSection";
import PhotoGallery from "./components/PhotoGallery";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";
import { weddingData } from "./data/weddingData";
import "./styles/global.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const { background } = weddingData;

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <div
        className="page-bg"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease 0.1s",
          backgroundImage: `url(${background.subtleImage})`,
        }}
      >
        <HeroSection />
        <SaveTheDate />
        <PersonalMessage />
        {/* <FamilyDetails /> */}
        <EventTimeline />
        <VenueSection />
        <PhotoGallery />
        <Footer />
      </div>

      <MusicPlayer />
    </>
  );
}
