import { defineConfig } from "tinacms";

export default defineConfig({
    clientId: "629a1e8f-4838-43e3-8056-4275e76ec729",
    token: "835f0fff0ec472fd9b552eea6a55dad2498451c3",
    branch: "main",
    build: {
        outputFolder: "admin",
        publicFolder: "public",
     },
     media: {
        tina: {
            mediaRoot: "public/images",
            publicFolder: "public",
        }
     },
    schema: {
        collections: [
            {
                name: "blogs_posts",
                label: "Blogs posts",
                path: "/Users/alexandergirardet/Marketing/alavida/vibeflow-v3/content/blogs",
                format: "mdx",
                ui: {
                    router: ({ document, collection }) => {
                        return `/blog`
                    }
                },
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
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
                                    { type: "string", name: "caption", label: "Caption", required: true },
                                ],
                            },
                        ],
                    },
                ]
            },
        ],
    },
}); 