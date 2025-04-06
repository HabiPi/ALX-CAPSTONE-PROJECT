import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import FeatureButtons from "./FeatureButtons";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import Footer from "./footer";

function Home() {
  return (
    <>
      <main>
        <section>
          <div className=" bg-green-800 items-center">
            <Logo />
            <Navbar />
          </div>
        </section>

        <section>
          <div className="space-y-10 text-center text-white text-6xl font-bold p-20 bg-b-image bg-no-repeat bg-cover">
            <a href="">
              <h1 className="">Welcome</h1>
            </a>
          </div>
        </section>

        <FeatureButtons />
        <AboutPage />
        <ContactPage />
      </main>

      <Footer />
    </>
  );
}

export default Home;
