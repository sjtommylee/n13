import { NextPage, type Metadata } from "next";

export const metadata: Metadata = {
  title: "post",
  description: "root page for posts",
};

const BlogPage: NextPage = () => {
  return (
    <section>
      <div>
        <h1>Blog Page / Posts</h1>
      </div>
    </section>
  );
};

export default BlogPage;
