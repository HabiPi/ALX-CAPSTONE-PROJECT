import Logo from "./logo";
import Navbar from "./navbar";

function Home() {
  return (
    <>
      <div className="h-screen bg-green-800">
        <Logo />
        <Navbar />

        <div className="text-center text-white text-6xl font-bold p-20 bg-b-image bg-no-repeat bg-cover">
          <a href="">
            <h1 className="">Welcome</h1>
          </a>
        </div>
      </div>

      <div className=" bg-green-800 text-white text-center flex justify-between px-60">
        <div>
          <a href="">
            <img
              src="/src/assets/newImage.png"
              alt="Plus icon"
              className="content-center"
            />
            <p>Add Plan</p>
          </a>
        </div>

        <div>
          <a href="">
            <img
              src="/src/assets/newImage.png"
              alt="Plus icon"
              className="pl-4"
            />
            <p>Add Playlist</p>
          </a>
        </div>

        <div>
          <a href="">
            <img src="/src/assets/band.png" alt="Plus icon" className="pl-8" />
            <p>Add Music Team</p>
          </a>
        </div>
      </div>

      <section className="bg-green-800 text-white text-center flex justify-center p-20">
        <div>
          <a href="">
            <img
              src="/src/assets/folder.png"
              alt="a folder"
              className="w-20 h-auto"
            />
            <p>Planned</p>
          </a>
        </div>
      </section>

      <div className="h-24 flex justify-center p-6 bg-black text-white opacity-85">
        <img src="/src/assets/logo.svg" alt="logo" className="w-20 h-auto" />
        <p className="pl-80">©worshipLeadPlanner-2025</p>
      </div>
    </>
  );
}

export default Home;
