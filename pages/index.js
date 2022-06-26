import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const styles = { width: 40, height: 40 };
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* Introduction */}
      <section className={utilStyles.headingMd}>
        <p>
          Hi! I'm <b>Dastan</b>. I'm a hobbyist software engineer, and I love
          doing things in <i>Python, C# and JavaScript</i>.
        </p>
      </section>
      {/* Links */}
      <section className={utilStyles.contacts}>
        <h1>Contacts</h1>
        <a href="https://github.com/Dositan">
          <AiFillGithub style={styles} />
        </a>
        <a href="https://linkedin.com/in/dosek">
          <AiFillLinkedin style={styles} />
        </a>
        <a href="https://twitter.com/dastanozgeldi">
          <AiFillTwitterSquare style={styles} />
        </a>
      </section>
      {/* Blogs Section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.utilStyles}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
