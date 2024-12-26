import React, { useContext, useState } from "react";
import { Menu, Input } from "antd";
import NewsProvider from "../../provider/NewsProvider";

const { Search } = Input;

const Navbar = () => {
  const { fetchData } = useContext(NewsProvider);

  const menuItems = [
    { key: "latest", label: "Latest" },
    { key: "india", label: "India" },
    { key: "world", label: "World" },
    { key: "business", label: "Business" },
    { key: "technology", label: "Technology" },
    { key: "entertainment", label: "Entertainment" },
    { key: "health", label: "Health" },
    { key: "science", label: "Science" },
    { key: "sports", label: "Sports" },
    { key: "politics", label: "Politics" },
    { key: "education", label: "Education" },
    { key: "crime", label: "Crime" },
    { key: "lifestyle", label: "Lifestyle" },
    { key: "automobile", label: "Automobile" },
    { key: "weather", label: "Weather" }
  ];

  return (
    <>
      <div className="container">
        <div className="logo d-flex justify-content-center align-items-center">
          <img src="Images/logo.png" alt="" style={{ height: "100px" }} />
        </div>

        <div style={{ padding: "16px", textAlign: "center" }}>
          <Search
            placeholder="Search news..."
            onSearch={value => fetchData(value)}
            style={{ maxWidth: 400, margin: '16px auto' }}
            enterButton
          />
        </div>

        <Menu
          mode="horizontal"
          onClick={({ key }) => fetchData(key)}
          items={menuItems}
          style={{ justifyContent: "center" }}
        />
      </div>
    </>
  );
};

export default Navbar;
