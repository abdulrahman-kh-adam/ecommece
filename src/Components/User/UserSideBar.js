import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div className="sidebar">
      <div className="d-flex flex-column">
        <Link to="/user/allorders" style={{ textDecoration: "none" }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            Manage Orders
          </div>
        </Link>

        <Link to="/user/favoriteproducts" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            Favorite Products
          </div>
        </Link>

        <Link to="/user/addresses" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            Addresses
          </div>
        </Link>

        <Link to="/user/profile/123" style={{ textDecoration: "none" }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            Profile
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminSideBar;
