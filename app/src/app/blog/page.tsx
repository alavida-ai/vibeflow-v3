import { client } from "@/tina/__generated__/client";
import { TinaCMS } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Image from "next/image";
import { BlogPost } from "@/app/components/blog";



export default async function Blog() {
  const { data, query } = await client.queries.blogs_posts({ relativePath: "2025-10-03-tinacms-vibe-marketing.mdx" });

  return (
    <div>
        <BlogPost data={data} variables={{ relativePath: "2025-10-03-tinacms-vibe-marketing.mdx" }} query={query}/>
    </div>
  )
}