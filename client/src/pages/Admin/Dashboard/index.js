import React from "react";
import Modal from "react-modal";
import Cloudinary from "../../../components/CloudinaryContext/index";

function AdminDashboard() {
  return (
    <section className="dashboard">
      <p>This is the admin dashboard</p>
      <Cloudinary></Cloudinary>
    </section>
  );
}

export default AdminDashboard;
