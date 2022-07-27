// import { useState, useContext } from "react";
// import { AuthContext } from "../../../contexts/authContext";
// import { api } from "../../../api/api";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import { NavBar } from "../../components/HomePage/navBar";
import { Hello } from "../../components/HomePage/helloUser";
import { HowWorks } from "../../components/HomePage/howWorks";
import { TripSlider } from "../../components/HomePage/tripsSlider";
import { Community } from "../../components/HomePage/community";
import { ContactUs } from "../../components/HomePage/contactUs";

export function HomePage() {
  return (
    <div> 
      <NavBar />
      <Hello />
      <HowWorks />
      <TripSlider />
      <Community />
      <ContactUs />
    </div>
  );
}
