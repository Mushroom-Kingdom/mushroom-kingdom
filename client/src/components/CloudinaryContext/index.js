import Axios from "axios";
import React, { useState } from "react";
import API from "../../utils/API";

function Cloudinary() {
  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    console.log(imageSelected);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "iuzrd2er");

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
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
}
export default Cloudinary;
