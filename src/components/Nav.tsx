import { Link } from "react-router-dom";

const Nav = (props: { name: string; setName: (name: string) => void }) => {
  
  const logout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    props.setName("");
  };


  // let menu;

  // if (props.name === "") {
  //   menu = (
  //     <ul className="navbar-nav me-auto mb-2 mb-md-0">
  //       <li className="nav-item active">
  //         <Link className="nav-link" aria-current="page" to="/">
  //           Home
  //         </Link>
  //       </li>
  //       <li className="nav-item active">
  //         <Link className="nav-link" to="/login">
  //           Login
  //         </Link>
  //       </li>
  //       <li className="nav-item active">
  //         <Link className="nav-link" to="/register">
  //           Register
  //         </Link>
  //       </li>
  //     </ul>
  //   )
  // } else {
  //   menu = (
  //     <ul className="navbar-nav me-auto mb-2 mb-md-0">
  //       <li className="nav-item active">
  //         <Link className="nav-link" aria-current="page" to="/">
  //           Home
  //         </Link>
  //       </li>
  //       <li className="nav-item">
  //         <Link className="nav-link" to="/login" onClick={logout}>
  //           Logout
  //         </Link>
  //       </li>
  //     </ul>
  //   );
  // }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          GO-React Project
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {/* {menu} */}
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={logout}>
                Logout
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
