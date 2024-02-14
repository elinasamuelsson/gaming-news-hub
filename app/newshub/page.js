import MainNews from "../../components/MainNews.js";
import NewsSearch from "../../components/NewsSearch.js";

//newshub page
export default function newshub() {
  return (
    <div className="content-column">
      <NewsSearch />
      <MainNews />
    </div>
  );
}
