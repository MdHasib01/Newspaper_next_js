import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

const readNews = ({ news }) => {
  //   const router = { useRouter };
  //   const { id } = router.query;
  return (
    <div className="body-container">
      <Head>
        <title>{news.title}</title>
        <meta
          name="description"
          content={`${news.title}। ভোরের আলো বাংলা সংবাদপত্র। দক্ষিণবঙ্গেরর সর্ববৃহৎ নিউজ পেপার।`}
        />
        <meta property="og:title" content={news.title} />
        <meta
          property="og:description"
          content={`${news.title}। ভোরের আলো বাংলা সংবাদপত্র। দক্ষিণবঙ্গেরর সর্ববৃহৎ নিউজ পেপার।`}
        />
        <link
          rel="canonical"
          href={`https://stark-stream-09883.herokuapp.com/allnews/${news._id}`}
        ></link>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://stark-stream-09883.herokuapp.com/allnews/${news._id}`}
        />
        <meta property="og:site_name" content="VORER ALO" />
        <meta
          property="og:image"
          content="https://i.ibb.co/5KjDS4S/Gigs-Blog-Post-compressed1-2.gif"
        />
        {/* <meta
          property="og:image"
          content={`data:image/png;base64,${news.image}`}
        /> */}
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="469" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="top-add">
        <img
          width="970"
          height="90"
          src="https://i.ibb.co/cyWHXdh/14349274497265834184.gif"
          alt=""
        />
      </div>
      <hr />
      <div className="single-news-container">
        <div>
          <div>
            <h3>{news.category}</h3>

            <h2 className="title">{news.title}</h2>
            <p>
              {news.reporter}, {news.address}
            </p>
            <hr />
          </div>
          <div className="single-news-details">
            <img
              width="100%"
              src={`data:image/png;base64,${news.image}`}
              alt=""
            />
            <div dangerouslySetInnerHTML={{ __html: news.newsDetails }}></div>
            <hr />
            <hr />
            <div className="comment">
              <h2>মন্তব্য করুন</h2>
              <div>social icon</div>
            </div>
            <hr />
            {/* <Comment newsId={news._id} /> */}
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/HXcfLN6/9656093656252652900.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://stark-stream-09883.herokuapp.com/allnews/${context.params.id}`
  );
  const news = await res.json();

  return {
    props: {
      news,
    },
  };
};

export default readNews;
