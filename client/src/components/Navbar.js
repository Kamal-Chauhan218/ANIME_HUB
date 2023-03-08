import { React } from "react";
import { useNavigate } from "react-router-dom";

function Navbar(props) {

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    props.setUser(null);
    navigate("/login");
  };

  const name = props.user?.name.split(" ")[0].toLocaleLowerCase();
  const isLoggedIn = !!name
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            className="uzumaki_logo"
            src={
              "https://i.pinimg.com/236x/61/16/e5/6116e5ec78c3160fb754ad264e274e12--logo-google-understanding-anxiety.jpg"
            }
            alt="uzumaki clan logo"
          />
          <span className="ml-3 text-xl">Uzumaki Clan</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">About Us</a>
          <a className="mr-5 hover:text-gray-900">Clans</a>
          <a className="mr-5 hover:text-gray-900">Hokage</a>
          <a className="mr-5 hover:text-gray-900" href="/akatsuki">
            Akatsuki
          </a>
        </nav>
        <p className="mr-5 text-red-500 hover:text-gray-900">
          Welcome {name}
        </p>
        <button
          onClick={logout}
          className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
        >
          {!isLoggedIn ? "Login" : "Logout"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
