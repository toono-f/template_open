import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "src/components/layout";
import Seo from "src/components/seo";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage src="../images/gatsby-astronaut.png" width={300} quality={95} formats={["auto", "webp", "avif"]} alt="A Gatsby astronaut" style={{ marginBottom: `1.45rem` }} />
    <p>
      <Link to="/">top</Link>
    </p>
  </Layout>
);

export default IndexPage;
