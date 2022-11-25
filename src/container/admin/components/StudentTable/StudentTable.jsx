/*
import classes from "./StudentTable.module.scss";

const StudentTable = () => {
  return <div className={classes.StudentTable}></div>;
};
*/
import React, { useState, useEffect } from "react";
import { Space, Table, Tag } from "antd";
import axios from "axios";

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);

  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const columns = [
  {
    title: "Name",
    dataIndex: "firstName",
    key: "firstName",
    render: (_, { firstName, lastName }) => (
      <a style={{ textTransform: "capitalize" }}>
        {" "}
        {`${firstName} ${lastName}`}
      </a>
    ),
  },
  {
    title: "Age",
    dataIndex: "birthDate",
    key: "birthDate",
    render: (birthDate) => <a> {getAge(birthDate)} </a>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

const StudentTable = () => {
  const [data, setData] = useState(null);

  const fetchStudentData = () => {
    setData(null);
    axios
      .get("http://localhost:5000/api/studentapi/student")
      .then((res) => {
        console.log("studentsData", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchStudentData();
  }, []);
  return (
    <Table
      pagination={{ position: ["bottomCenter"] }}
      columns={columns}
      dataSource={data}
    />
  );
};

export default StudentTable;
