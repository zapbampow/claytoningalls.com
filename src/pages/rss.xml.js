import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import dayjs from "dayjs";

export async function GET(context) {
  const articles = await getCollection("articles");
  const snippets = await getCollection("snippets");

  const publishedArticles = articles.filter(
    (post) => post.data.status === "published"
  );
  const publishedSnippets = snippets.filter(
    (post) => post.data.status === "published"
  );

  const postsData = [...publishedArticles, ...publishedSnippets].sort(
    (a, b) => {
      const dateA = dayjs(a.data.publishedAt).unix();
      const dateB = dayjs(b.data.publishedAt).unix();
      return dateB - dateA;
    }
  );

  //   console.log("postsData", postsData);

  const posts = postsData.map((post) => ({
    title: post.data.title,
    pubDate: post.data.publishedAt,
    link: `/${post.collection}/${post.id}/`,
    description: `${post?.data?.description ? post.data.description : ""}<br /><a href="${`/${post.collection}/${post.id}/`}">Read more</a>`,
  }));

  return rss({
    // `<title>` field in output xml
    title: "Clayton Ingalls",
    // `<description>` field in output xml
    description: "Code, snippets, projects, and other random stuff",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: posts,
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
