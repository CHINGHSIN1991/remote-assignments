class Banner extends React.Component {
  state = {
    banner_content: <BannerContent />
  };

  down = () => {
    this.setState({
      banner_content: "Have a Good Time!"
    });
  }

  up = () => {
    this.setState({
      banner_content: <BannerContent />
    });
  }

  render() {
    return(
      <section className="banner" onMouseDown={this.down} onMouseUp={this.up}>
        <div id="main-info" className="main-info">
          { this.state.banner_content }
        </div>
     </section>
    );
  }
}

function BannerContent () {
  return (
    <span>
      Mathematics <span className="divide-line">｜</span><span className="line-change"><br /></span>
      Architecture <span className="divide-line">｜</span><span className="line-change"><br /></span>
      Graphic <span className="divide-line">｜</span><span className="line-change"><br /></span>
      User Interface
    </span>    
  );
}
