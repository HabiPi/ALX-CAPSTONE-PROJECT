import React from "react";

function Footer() {
  const footerBgColor = "bg-black opacity-85";

  return (
    <footer
      className={`${footerBgColor} text-white p-4 flex justify-between items-center text-md`}
    >

      <div className="logo-container ">
        <a href="">
          <img src="/src/assets/logo.svg" alt="Logo" className="logo size-40 ml-60" />
        </a>
      </div>

      <div className="mr-60"> 
      <a href=""> &copy;worshipLeadPlanner@{new Date().getFullYear()}
      </a>
      </div>
      

    </footer>
  );
}

export default Footer;
