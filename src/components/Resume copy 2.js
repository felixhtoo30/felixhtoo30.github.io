import React from "react";
import jsPDF from "jspdf";

const Resume = () => {
  const download = () => {
    console.log("dasfasf");
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#nice"), {
      callback: function (pdf) {
        pdf.save("exfdas.pdf");
      },
    });
  };
  return (
    <div>
      <button className="mt-80" onClick={download}>
        print
      </button>
      <div id="nice">
        <h1>Hello World</h1>
        <h3>That's great</h3>
      </div>
    </div>
  );
};

export default Resume;
