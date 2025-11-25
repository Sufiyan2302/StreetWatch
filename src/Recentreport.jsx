import React, { createElement, useContext, useEffect, useState } from "react";
import { db } from "./firebase.js";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Recentreport = () => {
  let [report, setreport] = useState([]);
  let data = useLocation();
  console.log(data.state);

  useEffect(() => {
    let getreportdata = async () => {
      try {
        let reportdata = await getDocs(collection(db, "reports"));

        let filterdata = reportdata.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setreport(filterdata);
      } catch (err) {
        console.error(err);
      }
    };
    getreportdata();
  }, []);

  let viewimg = () => {
    let img = React.createElement("img", { src: report.image }, null);
  };

  let ondelete = async (id) => {
    try {
      let deletereport = doc(db, "reports", id);
      confirm("Are you sure you want to delete this");
      await deleteDoc(deletereport);
      setreport((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="report-main">
      <div>
        {report.map((v, i) => {
          return (
            <div
              key={i}
              style={{
                border: "1px solid black",
              }}
            >
              <h1>{v.title}</h1>
              <p>{v.description}</p>

              {/* Correct timestamp display */}
              <p>Date:{v.createdAt?.toDate?.().toLocaleString?.() || ""}</p>

              <p>
                Lat: {v.location?.latitude}
                Long: {v.location?.longitude}
              </p>

              <button
                onClick={() => {
                  setreport((prev) => {
                    const updated = [...prev];
                    updated[i].show = !updated[i].show; // toggle show property
                    return updated;
                  });
                }}
              >
                view img
              </button>
              {data.state.login ? (
                <button onClick={() => ondelete(v.id)}>delete</button>
              ) : (
                ""
              )}
              {v.show && (
                <img
                  src={v.img} // make sure your Firestore doc has img url
                  alt="report"
                  style={{
                    width: "300px",
                    marginTop: "10px",
                    borderRadius: "10px",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recentreport;
