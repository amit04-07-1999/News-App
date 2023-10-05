import { useContext} from "react";
import "./Newsapp.css";
import NewsProvider from "../../provider/NewsProvider";

const Newsapp = () => {
  const { newsapi } = useContext(NewsProvider)
  return (
    <>
      <div className="container">
        {newsapi &&
          newsapi.map((ch, index) => {
            return (

              <div class="card" key={index} >
                <img className="image" src={ch.urlToImage} alt="" />
                <div class="content">
                  <a href="#">
                    <span class="title">
                      {ch.title}
                    </span>
                  </a>

                  <p class="desc">
                    {ch.description}
                  </p>

                  <a class="action" href={ch.url}>
                    Read more
                    <span aria-hidden="true">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Newsapp;
