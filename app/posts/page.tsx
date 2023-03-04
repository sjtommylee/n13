import { NextPage, type Metadata } from "next";

export async function generateMeta({ params }: Promise<Metadata | undefined>) {
  let post;
  if (!post) {
    return;
  }

  const { title, description } = post;

  return {
    title,
    description,
  };
}

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
