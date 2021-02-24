// import React from "react";
import Axios from "axios";
import React, { useState } from "react";

// import Cloudinary from "cloudinary";
// var cloudinary = require("cloudinary").v2;

function Cloudinary() {
  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    console.log(imageSelected);
    const formData = new FormData();
    formData.append("signature", process.env.CLOUDINARY_KEY);
    formData.append("file", imageSelected);
    formData.append("upload_preset", "iuzrd2er");

    cloudinary.utils.api_sign_request(params_to_sign, api_secret);

    Axios.post(
      "https://api.cloudinary.com/v1_1/djdhvwysz/image/upload",
      formData
    ).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <input
        //   name="file"
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
        //   class="file-upload"
        //   data-cloudinary-field="image_id"
        //   data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"
      />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
}
// iuzrd2er
export default Cloudinary;
