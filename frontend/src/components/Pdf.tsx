import React from "react";
import axios from "axios";
import { jsPDF } from "jspdf";

const Pdf = () => {
  const doc = new jsPDF();
  doc.text("Hello world!", 10, 10);
  const sendPdfData = async (doc) => {
    try {
      var res = doc.output("datauristring");
      //console.log(res.split("base64,")[1]);
      const { data } = await axios.post(
        "http://localhost:8000/send/attachment",
        { pdf: res.split("base64,")[1] }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={() => sendPdfData(doc)}>Mail PDF</button>
    </div>
  );
};

export default Pdf;
