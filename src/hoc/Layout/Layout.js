import React from "react";
import "./Layout.css";
import MenuToggle from "../../components/Navigation/MunuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends React.Component {
  state = {
    menu: false,
  };
  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };
  menuCloseHandler = () => {
    this.setState({
      menu: false,
    });
  };
  render() {
    return (
      <div className="layout">
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <Drawer isOpen={this.state.menu} onClose={this.menuCloseHandler} />
        <main className="layout-wrapper">{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
