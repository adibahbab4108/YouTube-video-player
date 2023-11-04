import { useState } from "react";
import ReactPlayer from "react-player";
import lecturelia from "./assets/ytPlaylists";
import "./App.css";

function App() {
  const [youtubeVideo, setYoutubeVideo] = useState("");
  const [youtubeURL, setYoutubeURL] = useState(
    "https://www.youtube.com/watch?v=LXb3EKWsInQ"
  );

  const handleYoutubeChange = (e) => {
    setYoutubeVideo(e.target.value);
  };
  const handleYoutubesubmit = (e) => {
    e.preventDefault();
    setYoutubeURL(youtubeVideo);
  };

  return (
    <>
      {/* <div>
        {lecturelia.map((course) => <li onClick={()=>setYoutubeURL(course.url)}>{course.title}</li>
          )}
      </div> */}
      <div className="wrapper">
        <form className="form-group form d-flex" onSubmit={handleYoutubesubmit}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Enter youtube URL"
            required
            onChange={handleYoutubeChange}
          />
          <button type="submit" className="btn btn-success">
            Upload
          </button>
        </form>
        <div className="youtube-box">
          <ReactPlayer url={youtubeURL} className="video" controls />
        </div>
      </div>
    </>
  );
}

export default App;
