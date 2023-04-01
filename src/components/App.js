import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [category, setCategory] = useState("general");
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(
      `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=444f14dd3494ada26d1f149f3f5ffcdc&max=10&lang=en`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div id="main">
      <h1 className="heading">Top 10 {category} news.</h1>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="general">General</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
        <option value="world">World</option>
        <option value="entertainment">Entertainment</option>
        <option value="science">Science</option>
      </select>
      {loading ?? <p className="loader">Loading...</p>}
      {loading ? (
        ""
      ) : (
        <ol>
          <li key="">
            <img className="news-img" src="" alt="" />
            <section className="new-title-content-author">
              <h3 className="news-title">news title</h3>
              <section className="new-content-author">
                <p className="news-description">news description</p>
                <p className="news-source">
                  <strong>Source:</strong> source name
                </p>
              </section>
            </section>
          </li>
        </ol>
      )}
      <div>{category}</div>
    </div>
  );
};

export default App;
