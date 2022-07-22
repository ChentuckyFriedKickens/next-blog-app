import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Card from "../components/Card";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next js Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="col justify-center items-center p-24">
        <div>
          <h1>
            <span>Next js </span>Blog
          </h1>
          <div>
            <Card
              name="Hello world"
              text="
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            suscipit quidem veritatis quae nesciunt possimus? Doloremque ut
            facilis, quo, sint laboriosam omnis at maiores earum id esse porro
            et aut?"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
