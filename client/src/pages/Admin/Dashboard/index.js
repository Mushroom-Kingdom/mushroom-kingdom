import React from "react";
import Modal from "react-modal";
import Cloudinary from "../../../components/CloudinaryContext/index";
// import CloudinaryAPI from "cloudinary";

function AdminDashboard() {
  return (
    <section>
      <p>This is the admin dashboard</p>
      <Cloudinary>
        {/* <CloudinaryContext cloudName="djdhvwysz"> */}
        {/* <Image publicId="sample" format="jpg">
          <Transformation
            crop="fill"
            gravity="faces"
            width="300"
            height="200"
          />
        </Image> */}
      </Cloudinary>
    </section>
  );
}

export default AdminDashboard;
