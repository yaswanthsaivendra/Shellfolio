import React from 'react';
import fs from 'fs';
import Markdown from 'react-markdown';
import path from 'path';
import SideBar from './SideBar';

const getBlogContent = (blogFilePath: string) => {
    const content = fs.readFileSync(decodeURI(blogFilePath), "utf8");
    return content;
}

const getAllBlogFiles = (blogFolderSlug : string) => {
    const allFiles = fs.readdirSync(path.resolve(`./public/blogs/${blogFolderSlug}`));
    const blogFiles = allFiles.filter((file) => (file.endsWith(".md")));
    const blogFileNames = blogFiles.map((file) => (file.split(".")[0]));
    return blogFileNames;
}

const BlogPage = ({ params }: { params: any }) => {
    const blogFilePath = path.resolve(`./public/blogs/${params.blogFolderSlug}/${params.blogSlug}.md`);
    const content = getBlogContent(blogFilePath);
    const blogFileNames = getAllBlogFiles(params.blogFolderSlug);

    return (
        <div className='bg-bgcolor min-h-screen flex flex-col'>
            <SideBar blogFileNames={blogFileNames}/>
            <div className='prose prose-invert md:ml-96 my-12 mx-8'>
                <Markdown>
                    {content}
                </Markdown>
            </div>
        </div>
    )
}

export default BlogPage