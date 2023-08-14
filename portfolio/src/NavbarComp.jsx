import React from "react";

const NavbarComp = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Welcome
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a class="nav-link active" aria-current="page" href="/about">
                About
              </a>
              <a class="nav-link active" aria-current="page" href="/projects">
                Projects
              </a>
              <a class="nav-link active" aria-current="page" href="/contactme">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComp;
