import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.scss";
import { motion, transform } from "framer-motion";
import { adminSvg } from "../../../../assets/svg/SvgExporter";

const NavBar = ({ navElementList }) => {
  return (
    <motion.nav className={classes.NavBar}>
      <motion.header
        className={classes.Header}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        {adminSvg()}
        <motion.div initial={{}}>Administrator</motion.div>
      </motion.header>
      {navElementList.map((elem, index) => {
        let isActivated = false;
        return (
          <motion.div
            key={elem.name}
            initial={{
              x: "-20%",
              y: 25 + 10 * index,
              opacity: 0,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5 + 0.1 * index,
              delay: index * 0.25,
            }}
          >
            <NavLink
              end
              to={elem.to}
              className={({ isActive }) => {
                return isActive
                  ? classes.NavElement + " " + classes.active
                  : classes.NavElement;
              }}
            >
              <div className={classes.NavElementContainer}>
                {isActivated ? (
                  <motion.div className={classes.line} layoutId="line">
                    lol
                  </motion.div>
                ) : null}
                {elem.icon}
                <div className={classes.textHolder}>{elem.name}</div>
              </div>
            </NavLink>
          </motion.div>
        );
      })}
    </motion.nav>
  );
};

export default NavBar;
