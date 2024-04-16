import React from 'react';
import fs from 'fs';
import Markdown from 'react-markdown';

const getBlogContent = (slug : string) => {
    const folder = "blogs/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    return content;
}

const BlogPage = ({ params } : { params : any}) => {
    const slug = params.slug;
    const content = getBlogContent(slug);
    console.log(content);

    return (
    <div className='bg-bgcolor h-screen'>
        <Markdown>
            {content}
        </Markdown>
    </div>
    )
}

export default BlogPage