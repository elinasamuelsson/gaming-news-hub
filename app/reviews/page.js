import PostHistory from "../../components/PostHistory.js";
import PopularPosts from "../../components/PopularPosts.js";

// reviews page
export default function reviews() {
  return (
    <div className="content">
      <div className="side">
        <PostHistory />
      </div>
      <hr className="divider-column"/>
      <div className="main">
        <PopularPosts />
      </div>
    </div>
  );
}