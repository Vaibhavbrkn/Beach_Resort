import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Image from "../components/StyledHero";

function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="luxurious rooms"
          subTitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
}

export default Home;
