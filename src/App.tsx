import Webcam from "react-webcam";

const videoConstraints = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const WebcamComponent = () => (
  <Webcam videoConstraints={videoConstraints} style={{ width: "100%" }} />
);

function App() {
  return (
    <div className="App">
      <div id="video_stream">
        <div style={{ width: "100%", margin: "auto" }}>
          <WebcamComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
