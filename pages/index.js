import Head from "next/head";
import HomeTopNews from "../components/HomeTopNews";
import style from "../styles/Home.module.css";
export default function Home({ allNewsReverse }) {
  const allNews = allNewsReverse.reduceRight(function (arr, last, index, coll) {
    return (arr = arr.concat(last));
  }, []);
  return (
    <div className="body-container">
      <Head>
        <title>ভোরের আলো</title>
      </Head>

      <HomeTopNews allNews={allNews} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://stark-stream-09883.herokuapp.com/allnews");
  const allNewsReverse = await res.json();

  return {
    props: {
      allNewsReverse,
    },
  };
};
