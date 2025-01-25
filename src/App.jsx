import MainContent from "./components/maincontent/MainContent";
import "./App.css";
import downloadIcon from "./assets/svg/download-solid.svg";
import Header from "./components/header/Header";

function App() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/my-cv.pdf";
    link.download = "my-cv.pdf";
    link.click();
  };
  return (
    <>
      <div className="container">
        <Header />
        <MainContent />
        <div className="download-cv-wrapper">
          <a 
          href="/my-cv.pdf" 
          target="_blank"
          
      
          className="download-cv download-cv-wrapper" 
          // onClick={downloadCV}
          >
            View CV
          {/* <span className="download-icon">
             <img src={downloadIcon} alt="home-icon" />
          </span> */}
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
