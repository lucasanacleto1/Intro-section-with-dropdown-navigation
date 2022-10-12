import "../../styles/components/Navbar/header.scss";
import Logo from "./../../../public/logo/logo.svg";

import TodoIcon from "../../../public/icons/icon-todo.svg";
import CalendarIcon from "../../../public/icons/icon-calendar.svg";
import RemindersIcon from "../../../public/icons/icon-reminders.svg";
import PlanningIcon from "../../../public/icons/icon-planning.svg";

import UpArrowIcon from "../../../public/icons/icon-arrow-up.svg";
import DownArrowIcon from "../../../public/icons/icon-arrow-down.svg";
import Menuitems from "./menu-items";

const Navbar = () => {
  const navItems = {
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

  // console.log(Object.keys(navItems));

  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" />
      {/* {Object.keys(navItems).map((item, index) => (
        <li key={index}>{navItems[item][]}</li>
      ))} */}
      <div className="menu-items-container">
        <div className="dropdown-item">
          <span className="dropown-item__title">Features</span>
          <ul className="dropdown-item__list">
            <li>Todo List</li>
            <li>Calendar</li>
            <li>Reminders</li>
            <li>Planning</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
