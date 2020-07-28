import React from "react";
import Search from "../../../containers/Search/Search";
import classes from "./Toolbar.module.scss";
import "./Menu_dropdown.scss";
import MenuItems from "../MenuItems/MenuItems";
import Logo from "../../Logo/Logo";
import MenuDropDrown from "../MenuDropdown/MenuDropdown";

class toolbar extends React.Component {
  state = {
    dropdown: false,
  };
  onDisplayMenu = () => {
    this.setState({ dropdown: !this.state.dropdown });
  };
  render() {
    const { dropdown } = this.state;
    return (
      <nav className={classes.Toolbar}>
        <Logo />
        <MenuItems />
        <div className="menu_list">
          <div className="dropdownMenu" onClick={this.onDisplayMenu}>
            <div>
              <i className="fas fa-bars"></i>
            </div>

            {dropdown ? (
              <div>
                <MenuDropDrown />
              </div>
            ) : null}
          </div>
        </div>

        <Search categories={this.props.categories} />
      </nav>
    );
  }
}

export default toolbar;
