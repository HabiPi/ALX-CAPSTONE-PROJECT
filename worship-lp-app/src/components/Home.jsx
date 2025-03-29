import Logo from "./logo";
import Navbar from "./navbar";


function Home() {
  return (
    <>
      <div className="h-screen bg-green-800">
        <Logo />
        <Navbar />
        <div className="text-center text-white text-6xl font-bold py-10 bg-b-image bg-no-repeat bg-cover">
          <h1 className="drop-shadow-2xl">Welcome</h1>
        </div>
      </div>

    <div className="p-40 bg-green-800 text-white flex justify-between">
        <div>
            <p>Add Plan</p>
        </div>
        <div>
            <p>Add Playlist</p>
        </div>
        <div>
            <p>Add Music Team</p>
        </div>

    </div>


      <div className="h-24 bg-black text-white text-center pt-6 opacity-85">

        <p>©worshipLeadPlanner-2025</p>
      </div>
    </>
  );
}

export default Home;
