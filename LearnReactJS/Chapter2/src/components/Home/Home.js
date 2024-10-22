import videoHomePage from "../assets/video-homepage.mp4";
import "../Home/style.scss";
const Home = () => {
  return (
    <div className="homepage-container">
      <video className="homepage-video" autoPlay muted loop>
        <source src={videoHomePage} />
      </video>
      <div className="homepage-content">
        <div className="homepage-title1">There's a better way to ask</div>
        <div className="homepage-title2">
          <p>
            You don't want to make a boring form. And your andience won't answer
            one. Create a typeform instead-and make everyone happy.
          </p>
        </div>
        <div className="homepage-button1">
          <button>Get's started. It's free</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
