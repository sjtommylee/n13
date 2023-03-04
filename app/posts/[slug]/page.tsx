import { type Metadata, NextPage } from "next";

export async function generateStaticParams() {
  return;
}

export async function generateMetaData({ params }): Promise<Metadata | undefined> {
  console.log(params.slug);
  return {};
}

const Blog = () => {
  return (
    <section>
      <div>
        <h1>Blog section</h1>
      </div>
    </section>
  );
};

export default Blog;
