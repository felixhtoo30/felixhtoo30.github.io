import React from "react";
import ReactToPrint from "react-to-print";

import Banner from "./Banner";
import PrintArea from "./PrintArea";

class Resume extends React.PureComponent {
  render() {
    return (
      <>
        {/* <Banner title="Resume" />
        <ReactToPrint
          trigger={() => {
            return <button className="z-50">Print this out!</button>;
          }}
          content={() => this.componentRef}
          // pageStyle={pageStyle}
        />
        <div className="relative bottom-36 shadow-2xl py-6 z-40 bg-white" style={{width: '8.5in', margin: 'auto'}}>
          <PrintArea ref={el => (this.componentRef = el)} />
        </div> */}
      </>
    );
  }
}

export default Resume;
