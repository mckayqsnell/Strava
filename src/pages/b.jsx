import * as React from "react";
import Layout from "../components/Layout";

const b = () => {
  return (
    <>
      <Layout active={1}>
        <h1>Hi from the b page</h1>
      </Layout>
      <Layout active={1}>
        <h1>Hi from the b page</h1>
      </Layout>
    </>
  );
};

export default b;
