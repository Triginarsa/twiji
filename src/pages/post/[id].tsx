import { type NextPage } from "next";
import Head from "next/head";

const SinglePostPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <main className="flex h-screen justify-center">
        <div className="w-full border-x border-slate-400 md:max-w-2xl">
          Post View
        </div>
      </main>
    </>
  );
};

export default SinglePostPage;
