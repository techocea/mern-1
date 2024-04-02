import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav className="flex justify-between py-2 px-5">
        <Link to={"/"}>
          <h1 className="font-bold text-2xl">Logo.</h1>
        </Link>
        <Link
          to={"/create-user"}
          className="bg-yellow-500 font-bold hover:bg-yellow-200 transition-all p-3.5 text-black"
        >
          Add New User
        </Link>
      </nav>

      <Outlet />
    </>
  );
};

export default App;
