import classes from "./Admin.module.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar/NavBar";
import {
  homesvg,
  usersvg,
  clipboardsvg,
  timersvg,
} from "../../assets/svg/SvgExporter";
import Users from "./pages/users/Users";

const navElementList = [
  {
    name: "home",
    to: "/admin",
    icon: homesvg(),
  },
  {
    name: "users",
    to: "/admin/users",
    icon: usersvg(),
  },
  {
    name: "schedual",
    to: "/admin/schedual",
    icon: timersvg(),
  },
  {
    name: "announcements",
    to: "/admin/announcements",
    icon: clipboardsvg(),
  },
];

const Admin = () => {
  return (
    <div className={classes.Admin}>
      <div className={classes.main_container}>
        <NavBar navElementList={navElementList} />
        <div className={classes.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/*" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
