class App extends React.Component {
  state = {
    screen_y: 0,
    screen_position: "relative",
    position_y: 0,
    popupmenu_property: "popup-menu-hide",
    popupbg_property: "popmenu-bg-hide",
  }

  menuOn = () => {
    this.setState({
      popupmenu_property: "popup-menu-show",
      popupbg_property: "popmenu-bg-show",
      screen_y: -window.scrollY,
      // position_y: window.scrollY,
      screen_position: "fixed",
    });
  }

  menuOff = () => {
    this.setState({
      popupmenu_property: "popup-menu-hide",
      popupbg_property: "popmenu-bg-hide",
      screen_y: 0,
      screen_position: "relative",
    });
    // console.log(this.state.position_y);
    // window.scrollTo(0,this.state.position_y);
  }


  render() {
    return(
      <div style={{width: '100%', top: this.state.screen_y, position: this.state.screen_position}}>
        <Navbar
          popupmenu_property={this.state.popupmenu_property} 
          popupbg_property={this.state.popupbg_property}
          menuOn={this.menuOn}
          menuOff={this.menuOff} 
        />
        <Banner />
        <Content />
      </div>
    );
  }
}
