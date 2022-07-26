import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { useState, useEffect } from "react";

import Card from "../components/Card";

import styles from "../styles/Home.module.scss";

function getData() {}

const Home: NextPage = ({ prop }: any) => {
  const [state, setState]: any = useState();

  return (
    <div>
      <Head>
        <title>Next js Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="col justify-center items-center p-8 pt-24">
        <div className="md:w-1/2">
          <h1 className="text-center">
            <span>Next js </span>Blog
          </h1>
          <div className="py-12 col">
            <Card name="Hello world" />
            {prop.map((article: any) => {
              return (
                <Card
                  name={article.email}
                  text={article.body}
                  key={article.id}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  console.log(data);
  return { props: { prop: data } };
}

export default Home;
