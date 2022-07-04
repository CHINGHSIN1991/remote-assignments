class Content extends React.Component {
  state = {
    initialPlatforms : [
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
    ],
    additionalPlatforms : [
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
    ],
    infoBtn_content: "Press to know more",
    additionalPlatforms_property: "platforms platforms-hide",
  }

  knowMore = (e) => {
    e.preventDefault();
    this.setState({
      infoBtn_content: "Here are more platforms",
      additionalPlatforms_property: "platforms",
    });
  }

  render() {
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
          {this.state.initialPlatforms.map(platform =>
            <Platform
              platform={platform.platform}
              graphicUrl={platform.graphicUrl}
              key={platform.platform + 'key'}
            />
          )}
        </div>
        <a href="#"
          onClick={this.knowMore}
          id = "more-info-btn"
          className="more-info-btn">
          {this.state.infoBtn_content}
        </a>
        <div className={this.state.additionalPlatforms_property}>
          {this.state.additionalPlatforms.map(platform =>
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
}

function Platform (props) { 
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
