"use client"

import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Blogs_PostsQuery } from "@/tina/__generated__/types";
import Image from "next/image";

const components = {
    Image: (props: Blogs_PostsQuery["blogs_posts"]["body"]["Image"]) => (
        <div className="my-8">
            <Image 
                src={props.image_url} 
                alt={props.caption || props.image_url} 
                width={800} 
                height={400}
                className="rounded-lg w-full h-auto"
            />
            {props.caption && (
                <p className="text-sm text-gray-600 mt-2 text-center italic">{props.caption}</p>
            )}
        </div>
    ),
    h1: (props: any) => (
        <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900 leading-tight">
            {props.children}
        </h1>
    ),
    h2: (props: any) => (
        <h2 className="text-3xl font-bold mt-12 mb-4 text-gray-900 leading-tight border-b border-gray-200 pb-2">
            {props.children}
        </h2>
    ),
    h3: (props: any) => (
        <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-900 leading-snug">
            {props.children}
        </h3>
    ),
    h4: (props: any) => (
        <h4 className="text-xl font-semibold mt-6 mb-2 text-gray-900">
            {props.children}
        </h4>
    ),
    h5: (props: any) => (
        <h5 className="text-lg font-semibold mt-4 mb-2 text-gray-800">
            {props.children}
        </h5>
    ),
    h6: (props: any) => (
        <h6 className="text-base font-semibold mt-4 mb-2 text-gray-800">
            {props.children}
        </h6>
    ),
    p: (props: any) => (
        <p className="text-base text-gray-700 leading-relaxed mb-4">
            {props.children}
        </p>
    ),
    ul: (props: any) => (
        <ul className="list-disc list-outside space-y-2 mb-6 ml-6 text-gray-700">
            {props.children}
        </ul>
    ),
    ol: (props: any) => (
        <ol className="list-decimal list-outside space-y-2 mb-6 ml-6 text-gray-700">
            {props.children}
        </ol>
    ),
    li: (props: any) => (
        <li className="leading-relaxed pl-2">
            {props.children}
        </li>
    ),
    a: (props: any) => (
        <a 
            href={props.href}
            className="text-blue-600 hover:text-blue-800 underline transition-colors"
            target={props.href?.startsWith('http') ? '_blank' : undefined}
            rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
            {props.children}
        </a>
    ),
    code_block: (props: any) => {
        const code = props.value || props.code || props.children || '';
        const language = props.lang || props.language || '';
        return (
            <div className="my-6">
                {language && (
                    <div className="bg-gray-800 text-gray-300 px-4 py-2 rounded-t-lg text-xs font-mono">
                        {language}
                    </div>
                )}
                <pre className={`bg-gray-900 text-gray-100 ${language ? 'rounded-b-lg' : 'rounded-lg'} p-4 overflow-x-auto text-sm`}>
                    <code className="font-mono whitespace-pre">
                        {code}
                    </code>
                </pre>
            </div>
        );
    },
    pre: (props: any) => (
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code className="font-mono whitespace-pre">
                {props.children}
            </code>
        </pre>
    ),
    code: (props: any) => (
        <code className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono">
            {props.children}
        </code>
    ),
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 italic text-gray-700 bg-blue-50 rounded-r">
            {props.children}
        </blockquote>
    ),
    table: (props: any) => (
        <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
                {props.children}
            </table>
        </div>
    ),
    thead: (props: any) => (
        <thead className="bg-gray-100">
            {props.children}
        </thead>
    ),
    tbody: (props: any) => (
        <tbody className="divide-y divide-gray-200">
            {props.children}
        </tbody>
    ),
    tr: (props: any) => (
        <tr className="hover:bg-gray-50">
            {props.children}
        </tr>
    ),
    th: (props: any) => (
        <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
            {props.children}
        </th>
    ),
    td: (props: any) => (
        <td className="border border-gray-300 px-4 py-2 text-gray-700">
            {props.children}
        </td>
    ),
    strong: (props: any) => (
        <strong className="font-semibold text-gray-900">
            {props.children}
        </strong>
    ),
    em: (props: any) => (
        <em className="italic text-gray-800">
            {props.children}
        </em>
    ),
    hr: () => (
        <hr className="my-8 border-t border-gray-300" />
    ),
};

export const BlogPost = (props : {
    data: Blogs_PostsQuery,
    variables: {
        relativePath: string
    }
    query: string
}) => {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data
    })

    return (
        <article className="max-w-4xl mx-auto px-6 py-12">
            <header className="mb-8">
                <h1 className="text-5xl font-bold text-gray-900 mb-2">
                    {data.blogs_posts.title}
                </h1>
            </header>
            <div className="prose prose-lg max-w-none">
                <TinaMarkdown content={data.blogs_posts.body} components={components} />
            </div>
        </article>
    )
}