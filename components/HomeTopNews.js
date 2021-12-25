import Link from "next/link";

const HomeTopNews = ({ allNews }) => {
  return (
    <div>
      <div className="top-add">
        <img
          className="img-fluid"
          max-width="970"
          max-height="90"
          src="https://i.ibb.co/cyWHXdh/14349274497265834184.gif"
          alt=" ADDS"
        />
      </div>
      <hr />
      {/* Top section latest news  */}
      <div>
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-8">
                {allNews
                  .filter((item, index) => index === 0)
                  .map((news) => (
                    <div key={news._id} className="row thin-border">
                      <div className="col-md-6">
                        <Link href="news/[id]" as={`news/${news._id}`}>
                          <h3
                            style={{ cursor: "pointer" }}
                            className="news-headline"
                          >
                            {news.title}
                          </h3>
                        </Link>
                        <div>{news.newsDetails.slice(3, 100)}...</div>
                      </div>
                      <div className="col-md-6">
                        <img
                          className="img-fluid"
                          src={`data:image/png;base64,${news.image}`}
                          alt=""
                        />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="col-md-4 thin-border">
                {allNews
                  .filter((item, index) => index === 1)
                  .map((news) => (
                    <div key={news._id}>
                      <Link href="news/[id]" as={`news/${news._id}`}>
                        <h4
                          style={{ cursor: "pointer" }}
                          className="news-headline"
                        >
                          {news.title}
                        </h4>
                      </Link>
                      <p>{news.newsDetails.slice(3, 100)}...</p>
                    </div>
                  ))}
              </div>
            </div>
            <hr />
            <div className="row">
              {allNews
                .filter((item, index) => index > 1 && index < 5)
                .map((news) => (
                  <div key={news._id} className="col-md-4 thin-border">
                    <div>
                      <Link href="news/[id]" as={`news/${news._id}`}>
                        <h4
                          style={{ cursor: "pointer" }}
                          className="news-headline"
                        >
                          {news.title}
                        </h4>
                      </Link>
                      <p>{news.newsDetails.slice(3, 100)}...</p>
                    </div>
                  </div>
                ))}
            </div>
            <hr />
            <div className="row">
              {allNews
                .filter((item, index) => index > 4 && index < 8)
                .map((news) => (
                  <div key={news._id} className="col-md-4 thin-border">
                    <div className="row">
                      <div className="col-5">
                        <img
                          className="img-fluid"
                          src={`data:image/png;base64,${news.image}`}
                          alt=""
                        />
                        <p className="mt-2">{news.time.slice(0, 10)}</p>
                      </div>
                      <div className="col-7">
                        <Link href="news/[id]" as={`news/${news._id}`}>
                          <h5
                            style={{ cursor: "pointer" }}
                            className="news-headline"
                          >
                            {news.title}
                          </h5>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <hr />
            <div className="row">
              {allNews
                .filter((item, index) => index > 7 && index < 11)
                .map((news) => (
                  <div key={news._id} className="col-md-4 thin-border">
                    <div className="row">
                      <div className="col-5">
                        <img
                          className="img-fluid"
                          src={`data:image/png;base64,${news.image}`}
                          alt=""
                        />
                        <p className="mt-2">{news.time.slice(0, 10)}</p>
                      </div>
                      <div className="col-7">
                        <Link href="news/[id]" as={`news/${news._id}`}>
                          <h5
                            style={{ cursor: "pointer" }}
                            className="news-headline"
                          >
                            {news.title}
                          </h5>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <hr />
          </div>

          {/*------------------------------------------------
  ---------------------- side column news area --------------
  -------------------------------------------------------- */}

          <div className="col-md-3">
            <div className="add-image-center row">
              <img
                className="img-fluid mb-3"
                src="https://i.ibb.co/HXcfLN6/9656093656252652900.gif"
                alt="adds"
              />
            </div>
            <hr />
            <div className="row">
              {allNews
                .filter((item, index) => index === 1)
                .map((news) => (
                  <div key={news._id}>
                    <img
                      className="img-fluid mb-2"
                      src={`data:image/png;base64,${news.image}`}
                      alt=""
                    />
                    <div>
                      <Link href="news/[id]" as={`news/${news._id}`}>
                        <h4
                          style={{ cursor: "pointer" }}
                          className="news-headline"
                        >
                          {news.title}
                        </h4>
                      </Link>
                      <p>{news.newsDetails.slice(3, 100)}...</p>
                    </div>
                  </div>
                ))}
            </div>
            <hr />
            <div className="row">
              {allNews
                .filter((item, index) => index === 1)
                .map((news) => (
                  <div key={news._id}>
                    <div className="row">
                      <div className="col-5">
                        <img
                          className="img-fluid"
                          src={`data:image/png;base64,${news.image}`}
                          alt=""
                        />
                        <p className="mt-2">{news.time.slice(0, 10)}</p>
                      </div>
                      <div className="col-7">
                        <Link href="news/[id]" as={`news/${news._id}`}>
                          <h5
                            style={{ cursor: "pointer" }}
                            className="news-headline"
                          >
                            {news.title.slice(0, 30)}...
                          </h5>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopNews;
