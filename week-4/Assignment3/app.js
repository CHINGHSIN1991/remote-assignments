const initialPlatforms = [
  {
    platform: "Instagram",
    graphicUrl: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    platform: "LinkedIn",
    graphicUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    platform: "Discord",
    graphicUrl: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    platform: "Spotify",
    graphicUrl: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

const additionalPlatforms = [
  {
    platform: "Twitter",
    graphicUrl: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  },
  {
    platform: "YouTube",
    graphicUrl: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    platform: "Phone",
    graphicUrl: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    platform: "Tik Tok",
    graphicUrl: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

class Navbar extends React.Component {
  menuOn() {
    const menupop = document.getElementById("popmenu");
    menupop.style.right = "0px";
    const menupopBg = document.getElementById("popmenu-bg");
    menupopBg.style.display = "block";
    const fixBg = document.querySelector("body");
    fixBg.style.top = `-${window.scrollY}px`;
    fixBg.style.position = 'fixed';      
  }

  menuOff() {
    const menupop = document.getElementById("popmenu");
    menupop.style.right = "-300px";
    const menupop_bg = document.getElementById("popmenu-bg");
    menupop_bg.style.display = "none";
    const fixBg = document.querySelector("body");
    fixBg.removeAttribute("style");
  }

  render() {
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
              viewBox="0 0 16 16" onClick={this.menuOn}>
              <path fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div>
          <div id="popmenu-bg" className="popup-menu-bg" onClick={this.menuOff}></div>
          <div id="popmenu" className="popup-menu">
            <div className="close-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle"
                viewBox="0 0 16 16" onClick={this.menuOff}>
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
}

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="logo">
//         ChingHsin's <br />
//         self introduction
//       </div>
//       <div className="nav-menu">
//         <ul className="nav-list">
//           <li className="list-item"><a href="https://chinghsin1991.github.io/resume-for-frontend/" target="_blank">About</a>
//             <div className="underline"></div>
//           </li>
//           <li className="list-item"><a href="" target="_blank">Service</a>
//             <div className="underline"></div>
//           </li>
//           <li className="list-item"><a href="#platforms">Platforms</a>
//             <div className="underline"></div>
//           </li>
//           <li className="list-item"><a href="mailto:chinghsinforwork@gmail.com?subject=Mail form GitHub page">Contact</a>
//             <div className="underline"></div>
//           </li>
//         </ul>
//         <div className="burger-menu">
//           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list"
//             viewBox="0 0 16 16" onmousedown="menuOn();">
//             <path fill-rule="evenodd"
//               d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
//           </svg>
//         </div>
//         <div id="popmenu-bg" className="popup-menu-bg" onmousedown="menuOff();"></div>
//         <div id="popmenu" className="popup-menu">
//           <div className="close-btn">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle"
//               viewBox="0 0 16 16" onmousedown="menuOff();">
//               <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
//               <path
//                 d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
//             </svg>
//           </div>
//           <ul className="popup-menu-list">
//             <li className="popup-menu-list-item"><a href="https://chinghsin1991.github.io/resume-for-frontend/"
//               target="_blank">About</a>
//               <div className="underline"></div>
//             </li>
//             <li className="popup-menu-list-item"><a href="" target="_blank">Service</a>
//               <div className="underline"></div>
//             </li>
//             <li className="popup-menu-list-item"><a href="#platforms">Platforms</a>
//               <div className="underline"></div>
//             </li>
//             <li className="popup-menu-list-item"><a
//               href="mailto:chinghsinforwork@gmail.com?subject=Mail form GitHub page">Contact</a>
//               <div className="underline"></div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

class Banner extends React.Component {

  down() {
    const banner_text = document.getElementById("main-info");
    banner_text.innerHTML = "Have a Good Time!"
  }

  up() {
    const banner_text = document.getElementById("main-info");
    banner_text.innerHTML = `Mathematics <span class="divide-line">｜</span><span class="line-change"><br></span>
    Architecture <span class="divide-line">｜</span><span class="line-change"><br></span>
    Graphic <span class="divide-line">｜</span><span class="line-change"><br></span>
    User Interface`
  }

  render() {
    return(
      <section className="banner" onMouseDown={this.down} onMouseUp={this.up}>
        <div id="main-info" className="main-info">
          Mathematics <span className="divide-line">｜</span><span className="line-change"><br /></span>
          Architecture <span className="divide-line">｜</span><span className="line-change"><br /></span>
          Graphic <span className="divide-line">｜</span><span className="line-change"><br /></span>
          User Interface
        </div>
     </section>
    );
  }
}

const Content = (props) => {
  return (
    <section className="content">
      <div className="hint">
        know me <br />
        through these platforms
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
          className="bi bi-arrow-down-circle-fill down-icon" viewBox="0 0 16 16">
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
        </svg>
      </div>
      <div className="platforms">
        {props.initialPlatforms.map(platform =>
          <Platform
            platform={platform.platform}
            graphicUrl={platform.graphicUrl}
            key={platform.platform + 'key'}
          />
        )}
      </div>
      <ExtendBtn />
      <div id="platforms" className="platforms">
        {props.additionalPlatforms.map(platform =>
          <Platform
            platform={platform.platform}
            graphicUrl={platform.graphicUrl}
            key={platform.platform + 'key'}
          />
        )}
      </div>
    </section>
  );
}

const Platform = (props) => {
  return (
    <a href="" className="platform">
      <img className="platform-img"
        src={props.graphicUrl}
        alt={props.platform + 'logo'} />
      <div className="mask"></div>
      <h2 className="platform-title">{props.platform}</h2>
    </a>
  );
}

class ExtendBtn extends React.Component {
  knowMore(e) {
    e.preventDefault();
    const elem = document.getElementById("more-info-btn")
    elem.innerHTML = "Here are more platforms";
    let more_content = document.getElementById("platforms");
    more_content.style.display = "flex";
  }

  render() {
    return(
      <a href="#"
        onClick={this.knowMore}
        id = "more-info-btn"
        className="more-info-btn">
        Press to know more
      </a>
    );
  }
}

const App = (props) => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Content
        initialPlatforms={props.initialPlatforms}
        additionalPlatforms={props.additionalPlatforms}
      />
    </div>
  );
}

ReactDOM.render(
  <App initialPlatforms={initialPlatforms} additionalPlatforms={additionalPlatforms}/>,
  document.getElementById('root')
);
