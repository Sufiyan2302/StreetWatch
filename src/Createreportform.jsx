import React, { useState } from "react";
import { db, storage } from "./firebase.js";
import { collection, addDoc, Timestamp, GeoPoint } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Createreportform = () => {
  const [data, setData] = useState({
    title: "",
    desc: "",
    lat: "",
    long: "",
    img: null,
  });

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  let submitreport = async () => {
    try {
      //   let imgref = ref(storage, `reportimage/${data.img.name + v4()}`);
      // uploadBytes(imgref, data.img).then(() => {
      //   alert("upload succesful");
      // });

      let imageBase64 = "";
      if (data.img) {
        imageBase64 = await toBase64(data.img);
      }

      let result = await addDoc(collection(db, "reports"), {
        title: data.title,
        description: data.desc,
        location: new GeoPoint(parseFloat(data.lat), parseFloat(data.long)),
        img: imageBase64,
        createdAt: Timestamp.now(),
      });
      alert("Report Uploaded Successfully!");
      console.log(result);

      setData({
        title: "",
        desc: "",
        lat: "",
        long: "",
        img: null,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setData({
      ...data,
      img: e.target.files[0], // file object
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="form-main">
      <form className="form-info" onSubmit={handleSubmit}>
        <h2 style={{ color: "#FACC15" }}>Create Report !</h2>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={data.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="desc"
          placeholder="Enter description"
          value={data.desc}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lat"
          placeholder="Latitude"
          value={data.lat}
          onChange={handleChange}
        />

        <input
          type="text"
          name="long"
          placeholder="Longitude"
          value={data.long}
          onChange={handleChange}
        />

        <input type="file" name="img" onChange={handleFileChange} />

        <button type="submit" onClick={submitreport}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Createreportform;
