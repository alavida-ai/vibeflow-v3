// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "public/images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "blogs_posts",
        label: "Blogs posts",
        path: "content/blogs",
        format: "mdx",
        ui: {
          router: ({ document, collection }) => {
            return `/blog`;
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "Image",
                label: "Image",
                fields: [
                  { type: "string", name: "image_url", label: "Image URL", required: true },
                  { type: "string", name: "caption", label: "Caption", required: true }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
