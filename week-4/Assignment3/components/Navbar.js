function Navbar (props) {
  return(
    <div className="navbar">
      <div className="logo">
        ChingHsin's <br />
        self introduction
      </div>
      <div className="nav-menu">
        <ul className="nav-list">
          <li className="list-item"><a href="https://chinghsin1991.github.io/resume-for-frontend/" target="_blank">About</a>
            <div className="underline"></div>
          </li>
          <li className="list-item"><a href="" target="_blank">Service</a>
            <div className="underline"></div>
          </li>
          <li className="list-item"><a href="#platforms">Platforms</a>
            <div className="underline"></div>
          </li>
          <li className="list-item"><a href="mailto:chinghsinforwork@gmail.com?subject=Mail form GitHub page">Contact</a>
            <div className="underline"></div>
          </li>
        </ul>
        <div className="burger-menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list"
            viewBox="0 0 16 16" onClick={props.menuOn}>
            <path fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
        <div id="popmenu-bg" className={props.popupbg_property} onClick={props.menuOff}></div>
        <div id="popmenu" className={props.popupmenu_property}>
          <div className="close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle"
              viewBox="0 0 16 16" onClick={props.menuOff}>
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <ul className="popup-menu-list">
            <li className="popup-menu-list-item"><a href="https://chinghsin1991.github.io/resume-for-frontend/"
              target="_blank">About</a>
              <div className="underline"></div>
            </li>
            <li className="popup-menu-list-item"><a href="" target="_blank">Service</a>
              <div className="underline"></div>
            </li>
            <li className="popup-menu-list-item"><a href="#platforms">Platforms</a>
              <div className="underline"></div>
            </li>
            <li className="popup-menu-list-item"><a
              href="mailto:chinghsinforwork@gmail.com?subject=Mail form GitHub page">Contact</a>
              <div className="underline"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
