import { Space, Table } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  EditOutlined,
  DeleteOutlined,
  PrinterTwoTone,
  PlusSquareOutlined,
  RightCircleOutlined
  
} from "@ant-design/icons";

function UserTable() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  // DATA FROM DB USING AXIOS
//   const getUserDetails = () => {
//     axios
//       .get("http://localhost:4000/api/Users/getall-userslist")
//       .then((res) => {
//         setUserList(res.data.result);
//         console.log(userList);
//       });
//   };

  //  DATA FROM DB USING FETCH
  // const getUserDetails = () => {
  //   fetch("http://localhost:4000/api/Users/getall-userslist").then((res) => {
  //     res.json().then((res) => {
  //       console.log(res);
  //       setUserList(res.result);
  //       console.log(userList);
  //     });
  //   });
  // };

  const columns = [
    {
      title: "UserName",
      dataIndex: "UserName",
      key: "UserName",
    },
    {
      title: "EMail",
      dataIndex: "EMail",
      key: "EMail",
    },
    {
      title: "MobileNo",
      dataIndex: "MobileNo",
      key: "MobileNo",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a style={{ fontStyle: "italic" }}>Mail to {record.UserName}</a>
          <PlusSquareOutlined style={{ color: "Lime", marginLeft: "100px" }} />
          <EditOutlined style={{ color: "DeepSkyBlue", marginLeft: "10px" }} />
          <DeleteOutlined style={{ color: "red", marginLeft: "10px" }} />
          <PrinterTwoTone style={{ marginLeft: "10px" }} />
          <RightCircleOutlined />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table className="user-table" columns={columns} dataSource={userList} />
    </>
  );
}

export default UserTable;