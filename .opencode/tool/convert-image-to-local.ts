
import fs from 'fs';
import path from 'path';
import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "Convert an image to a base64 string and save it to the local directory",
  args: {
    imageUrl: tool.schema.string().describe("The URL of the image to convert"),
    filename: tool.schema.string().describe("The filename to save the image to"),
    directory: tool.schema.string().describe("The directory to save the image to"),
  },
  async execute(args) {
    const filePath = await saveImageToLocal(args.imageUrl, args.filename, args.directory);
    return filePath;
  },
})

export async function saveImageToLocal(imageUrl: string, filename: string, directory = './public'): Promise<string> {
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
  
  const filePath = path.join(directory, filename);
  fs.writeFileSync(filePath, Buffer.from(buffer));
  
  return filePath;
}
