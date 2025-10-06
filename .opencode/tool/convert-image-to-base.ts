
import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "Convert an image to a base64 string and save it to the local directory",
  args: {
    imageUrl: tool.schema.string().describe("The URL of the image to convert"),
  },
  async execute(args) {
    const base64 = await convertImageToBase64(args.imageUrl);
    return base64;
  },
})

export async function convertImageToBase64(imageUrl: string): Promise<string> {
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    return `data:image/jpeg;base64,${base64}`;
  }