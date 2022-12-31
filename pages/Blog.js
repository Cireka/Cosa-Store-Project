import { Fragment } from "react";
import BlogPage from "../Components/Blog/BlogPage";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navigation/NavBar";

const Blog = () => {
  return (
    <Fragment>
      <NavBar />
      <BlogPage />
      <Footer />
    </Fragment>
  );
};

export default Blog;
