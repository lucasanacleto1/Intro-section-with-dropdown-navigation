import "../../styles/components/Navbar/header.scss";
import Logo from "./../../../public/logo/logo.svg";

import TodoIcon from "../../../public/icons/icon-todo.svg";
import CalendarIcon from "../../../public/icons/icon-calendar.svg";
import RemindersIcon from "../../../public/icons/icon-reminders.svg";
import PlanningIcon from "../../../public/icons/icon-planning.svg";

import UpArrowIcon from "../../../public/icons/icon-arrow-up.svg";
import DownArrowIcon from "../../../public/icons/icon-arrow-down.svg";
import Menuitems from "./menu-items";
import { useState } from "react";

const Navbar = () => {
  const [menuItem, setMenuItem] = useState(false);
  const showMenuList = () => {};

  const navItems: INavItems = {
    Features: [
      { icon: TodoIcon, name: "Todo List", link: "#" },
      { icon: CalendarIcon, name: "Calendar", link: "#" },
      { icon: RemindersIcon, name: "Reminders", link: "#" },
      { icon: PlanningIcon, name: "Planning", link: "#" },
    ],
    Company: [
      { icon: "", name: "History", link: "#" },
      { icon: "", name: "Our Team", link: "#" },
      { icon: "", name: "Blog", link: "#" },
    ],
    Careers: [],
    About: [],
  };

  interface INavItems {
    [key: string]: {
      name?: string;
      icon?: string;
      link?: string;
    }[];
  }

  const obj = {
    teste: "oi",
  };

  // const keys = Object.keys

  console.log(navItems.About);

  return (
    <nav className="navbar">
      <img className="navbar__logo" src={Logo} alt="Logo" />
      <div className="menu-items-container">
        {Object.keys(navItems).map((item, index) => (
          <div className="dropdown-item" key={index}>
            <span className="dropown-item__title">{item}</span>
            {/* {navItems.key(index) ? (
              navItems.map((el) => (
                <ul className="dropdown-item__list">
                  <li>
                    <img src={TodoIcon} alt="Todo Icon" />
                    <span>Todo List</span>
                  </li>
                  <li>Calendar</li>
                  <li>Reminders</li>
                  <li>Planning</li>
                </ul>
              ))
            ) : (
              <span>teste</span>
            )} */}
          </div>
        ))}

        {/* <div className="dropdown-item">
          <span className="dropown-item__title">Features</span>
          <ul className="dropdown-item__list">
            <li>
              <img src={TodoIcon} alt="Todo Icon" />
              <span>Todo List</span>
            </li>
            <li>Calendar</li>
            <li>Reminders</li>
            <li>Planning</li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
