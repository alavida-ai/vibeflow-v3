# MDX Implementation Guide - Ship in 3 Days

## Step 1: Install Packages (2 minutes)

```bash
npm install @next/mdx @mdx-js/react @mdx-js/loader gray-matter
npm install --save-dev @types/mdx
```

## Step 2: Create Folder Structure (1 minute)

```bash
mkdir -p app/content/mdx
mkdir -p app/components/mdx
touch app/mdx-components.tsx
```

## Step 3: Update Config Files

### `next.config.ts` (Replace existing)
```typescript
import createMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: true, // Faster Rust-based compiler
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
```

### `app/mdx-components.tsx` (New file)
```typescript
import type { MDXComponents } from 'mdx/types'
import { YouTubeEmbed } from './components/mdx/YouTubeEmbed'
import { TwitterEmbed } from './components/mdx/TwitterEmbed'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Style default elements
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 text-gray-900">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-4 text-gray-800">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold mb-3 text-gray-800">{children}</h3>,
    p: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
    ul: ({ children }) => <ul className="mb-4 list-disc list-inside text-gray-700">{children}</ul>,
    ol: ({ children }) => <ol className="mb-4 list-decimal list-inside text-gray-700">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-600">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-6">
        {children}
      </pre>
    ),
    
    // Custom components
    YouTubeEmbed,
    TwitterEmbed,
    ...components,
  }
}
```

## Step 4: Create MDX Components

### `app/components/mdx/YouTubeEmbed.tsx`
```typescript
interface YouTubeEmbedProps {
  videoId: string
  title?: string
}

export function YouTubeEmbed({ videoId, title = "YouTube video" }: YouTubeEmbedProps) {
  return (
    <div className="relative aspect-video my-8 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="w-full h-full"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  )
}
```

### `app/components/mdx/TwitterEmbed.tsx`
```typescript
interface TwitterEmbedProps {
  tweetId: string
}

export function TwitterEmbed({ tweetId }: TwitterEmbedProps) {
  return (
    <div className="my-8 flex justify-center">
      <blockquote className="twitter-tweet" data-theme="light">
        <a href={`https://twitter.com/x/status/${tweetId}`}>Loading tweet...</a>
      </blockquote>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  )
}
```

## Step 5: Create MDX Utilities

### `app/lib/mdx.ts`
```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const MDX_PATH = path.join(process.cwd(), 'app/content/mdx')

export function getMDXFiles() {
  if (!fs.existsSync(MDX_PATH)) {
    return []
  }
  return fs.readdirSync(MDX_PATH).filter(file => file.endsWith('.mdx'))
}

export function getMDXPost(slug: string) {
  const filePath = path.join(MDX_PATH, `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`MDX file not found: ${slug}`)
  }
  
  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)
  
  return {
    content,
    frontmatter: {
      title: '',
      date: new Date().toISOString(),
      excerpt: '',
      ...data,
    },
    slug,
  }
}

export function getAllMDXPosts() {
  const files = getMDXFiles()
  
  return files.map(file => {
    const slug = file.replace('.mdx', '')
    const post = getMDXPost(slug)
    
    return {
      ...post,
      url: `/blog/mdx/${slug}`,
    }
  }).sort((a, b) => {
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  })
}
```

### `app/lib/social.ts`
```typescript
interface PostData {
  title: string
  excerpt: string
  url: string
  tags?: string[]
}

export function generateSocialContent(post: PostData) {
  const hashtags = post.tags?.map(tag => `#${tag.replace(/\s+/g, '')}`).join(' ') || ''
  
  return {
    twitter: {
      text: `🚀 New blog post: ${post.title}\n\n${post.excerpt}\n\nRead more: ${post.url} ${hashtags}`,
      characterCount: `🚀 New blog post: ${post.title}\n\n${post.excerpt}\n\nRead more: ${post.url} ${hashtags}`.length,
    },
    linkedin: {
      text: `I just published a new article: "${post.title}"\n\n${post.excerpt}\n\nWhat are your thoughts on this? I'd love to hear your perspective in the comments.\n\nRead the full post here: ${post.url}\n\n${hashtags}`,
      characterCount: `I just published a new article: "${post.title}"\n\n${post.excerpt}\n\nWhat are your thoughts on this? I'd love to hear your perspective in the comments.\n\nRead the full post here: ${post.url}\n\n${hashtags}`.length,
    },
  }
}
```

## Step 6: Create Your First MDX Post

### `app/content/mdx/2025-10-06-hello-mdx.mdx`
```mdx
---
title: "Hello MDX World!"
date: "2025-10-06"
excerpt: "Our first blog post with interactive components and rich content."
tags: ["mdx", "nextjs", "blog"]
author: "Your Name"
---

# Hello MDX World!

This is our first blog post using **MDX** - Markdown with React components!

## What makes this special?

With MDX, we can embed interactive components directly in our content:

<YouTubeEmbed videoId="dQw4w9WgXcQ" title="Never Gonna Give You Up" />

## Social Media Integration

Every MDX post automatically generates social media content. Here's what this post would generate:

**Twitter:** 🚀 New blog post: Hello MDX World!

Our first blog post with interactive components and rich content.

Read more: [your-site.com]/blog/mdx/2025-10-06-hello-mdx #mdx #nextjs #blog

## Code Examples

```javascript
function hello() {
  console.log("Hello from MDX!")
}
```

## What's Next?

- Add more interactive components
- Integrate with social media APIs
- Scale content production

> This is just the beginning of our content journey!
```

## Step 7: Create Blog Route

### `app/blog/mdx/[slug]/page.tsx`
```typescript
import { getMDXPost, getAllMDXPosts } from '../../../lib/mdx'
import { generateSocialContent } from '../../../lib/social'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

// For static generation
export async function generateStaticParams() {
  const posts = getAllMDXPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
}

// For SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getMDXPost(params.slug)
    return {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      openGraph: {
        title: post.frontmatter.title,
        description: post.frontmatter.excerpt,
        type: 'article',
        publishedTime: post.frontmatter.date,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.frontmatter.title,
        description: post.frontmatter.excerpt,
      },
    }
  } catch {
    return {
      title: 'Post Not Found',
    }
  }
}

export default function MDXBlogPost({ params }: Props) {
  let post
  
  try {
    post = getMDXPost(params.slug)
  } catch {
    notFound()
  }

  // Generate social content for this post
  const socialContent = generateSocialContent({
    title: post.frontmatter.title,
    excerpt: post.frontmatter.excerpt,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/blog/mdx/${params.slug}`,
    tags: post.frontmatter.tags,
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.frontmatter.title}
          </h1>
          <div className="text-gray-600 mb-4">
            {new Date(post.frontmatter.date).toLocaleDateString()}
            {post.frontmatter.author && ` • ${post.frontmatter.author}`}
          </div>
          {post.frontmatter.excerpt && (
            <p className="text-xl text-gray-700 leading-relaxed">
              {post.frontmatter.excerpt}
            </p>
          )}
        </header>
        
        {/* This will render the MDX content */}
        <div className="mdx-content">
          {/* MDX content will be imported dynamically in production */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>

      {/* Social Content Preview */}
      <aside className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Generated Social Content</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-blue-600">Twitter ({socialContent.twitter.characterCount}/280)</h4>
            <p className="text-sm text-gray-700 bg-white p-3 rounded border">
              {socialContent.twitter.text}
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-blue-700">LinkedIn ({socialContent.linkedin.characterCount}/3000)</h4>
            <p className="text-sm text-gray-700 bg-white p-3 rounded border">
              {socialContent.linkedin.text}
            </p>
          </div>
        </div>
      </aside>
    </div>
  )
}
```

## What You Just Built

### JSX Runtime (Simple Explanation)
The "JSX runtime" is React's way of converting `<Component />` into actual JavaScript. With Next.js 13+:

- **Old way:** Had to `import React from 'react'` in every file
- **New way:** Next.js automatically handles this conversion
- **For MDX:** You can mix Markdown and React components seamlessly

### Your Architecture

```
Content Creation:
├── Simple posts → TinaCMS (unchanged)
├── Rich posts → MDX files with React components
└── Social content → Auto-generated from frontmatter

Processing:
├── Next.js compiles MDX automatically
├── Your custom components are available globally
└── Static generation for fast loading

Output:
├── SEO-optimized blog pages
├── Social media content ready to copy/paste
└── Interactive components embedded in posts
```

## Testing Your Setup

1. **Install packages:** `npm install @next/mdx @mdx-js/react @mdx-js/loader gray-matter`
2. **Create the files above**
3. **Run dev server:** `npm run dev`
4. **Visit:** `http://localhost:3000/blog/mdx/2025-10-06-hello-mdx`

## Content Creator Workflow

### For Basic Posts (Keep using TinaCMS)
1. Go to `/admin`
2. Create/edit with visual editor
3. Publish

### For Rich Posts (New MDX workflow)
1. Create `.mdx` file in `app/content/mdx/`
2. Add frontmatter (title, date, excerpt, tags)
3. Write Markdown with `<YouTubeEmbed>` components
4. Git commit to publish
5. Copy generated social content from bottom of page

## When to Scale

- **Build optimization:** When page loads >3s
- **CMS integration:** When non-technical users need MDX editing  
- **Social automation:** When publishing >5 posts/week
- **Performance:** When serving >1000 monthly readers

This gets you shipping rich content in 3 days with a clear path to scale! 🚀