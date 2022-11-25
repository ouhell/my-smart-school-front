import classes from "./Users.module.scss";
import { useState } from "react";
import StudentTable from "../../components/StudentTable/StudentTable";
import { motion } from "framer-motion";
const userTypes = [
  {
    typeName: "students",
    component: <StudentTable />,
  },
  {
    typeName: "teachers",
    component: null,
  },
  {
    typeName: "secretaries",
    component: null,
  },
];

const Users = () => {
  const [selectedUserType, setSelectedUserType] = useState(
    userTypes[0].typeName
  );

  return (
    <div className={classes.Users}>
      <div className={classes.UserChooser}>
        {userTypes.map((type) => {
          return (
            <div
              key={type.typeName}
              className={classes.typeholder}
              onClick={() => {
                setSelectedUserType(type.typeName);
              }}
            >
              {type.typeName}
              {type.typeName === selectedUserType ? (
                <motion.div
                  className={classes.underline}
                  layoutId="underline"
                ></motion.div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className={classes.UserInfoTable}>
        {userTypes.find((elem) => elem.typeName == selectedUserType).component}
      </div>
    </div>
  );
};

export default Users;
