import React from "react";
import ReactDOM from "react-dom";
import ReactPDF, {
  Document, 
  Page, 
  StyleSheet,
  Text,
  View,
  Image,
  PDFDownloadLink,
  PDFViewer
} from "@react-pdf/renderer";
import { Preview, print } from 'react-html2pdf';
// import { pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "coral",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     borderColor: 'black'
//   },
//   colFirst: {
//     flexGrow: 1.5
//   },  
//   colSecond: {
//     flexGrow: 2
//   }
// });

// Create Document Component
// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={{...styles.section, ...styles.colFirst}}>
//         <Image src="../assets/images/fh_propic.jpg" />
//       </View>
//       <View style={{...styles.section, ...styles.colSecond}}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );

// const App = () => (
//   <PDFViewer width="400" height="700">
//     <MyDocument />
//   </PDFViewer>
// );

// ReactDOM.render(<App />, );

const Resume = () => {
  return (
    <div>
      {/* <PDFDownloadLink document={<MyDocument />} fileName={"example"}>
        <button className="mt-80"> Download </button>
      </PDFDownloadLink> */}
      <button className="mt-80" onClick={()=>print('a', 'jsx-template')}> print</button>
      <Preview id={'jsx-template'} >
          <p>adsf</p>
      </Preview>
    </div>
  );
};

export default Resume;
