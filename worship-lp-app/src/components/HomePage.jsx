import Logo from "./logo";
import Navbar from "./navbar";
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

        <section>
          <div className="flex justify-around text-white p-10">
            <div>
              <a href="">
                <img src="/src/assets/newImage.png" alt="Plus icon" className="w-10" />
                <div>
                <p>Add Plan</p>
                </div>
              </a>
            </div>

            <div>
              <a href="">
                <img src="/src/assets/newImage.png" alt="Plus icon" className="w-10"/>
                <p>Add Playlist</p>
              </a>
            </div>

            <div className="">
              <a href="">
                <img src="/src/assets/band.png" alt="Plus icon" className="w-10" />
                <p>Add Music Team</p>
              </a>
            </div>
          </div>
        </section>

        <section className="bg-green-800 text-white text-center flex justify-center p-10">
          <div>
            <a href="">
              <img
                src="/src/assets/folder.png"
                alt="a folder"
                className="w-10 h-auto pl-4"
              />
              <p>Planned</p>
            </a>
          </div>
        </section>

        <AboutPage />
        <ContactPage />
      </main>

      <Footer />
    </>
  );
}

export default Home;
