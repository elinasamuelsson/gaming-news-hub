import PopularNews from "../components/PopularNews.js";
import RecentNews from "../components/RecentNews.js";

// home page
export default function home() {
  return (
    <div className="content">
      <div className="main">
        <PopularNews />
      </div>
      <hr className="divider-column"/>
      <div className="side">
        <RecentNews />
      </div>
    </div>
  );
}
