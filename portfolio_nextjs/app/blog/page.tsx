import fs from "fs";
import Link from "next/link";
import Image from "next/image";
import path from "path";

const Blog = () => {

  const blogs : {
    name : string,
    image : string,
    firstFileName : string
  } [] = []

  
  //@desc Get Blog Folder Metadata - Folder Name and Image
  const getblogFolders = () => {
    const allowed_image_file_extensions = ["jpg", "png", "jpeg"]
    const blogFolders = fs.readdirSync(path.resolve('./public/blogs'));
    blogFolders.forEach((blogFolder) => {
      let firstFileName = "";
      const files = fs.readdirSync(path.resolve('./public/blogs/' + blogFolder));
      const image_file = files.find((file) => {
        if(firstFileName === "") {
          firstFileName = file.startsWith("01") ? file.split(".")[0] : "";
        }
        return allowed_image_file_extensions.find((extension) => extension === file.split(".")[1]) 
      });
      blogs.push({
        "name" : blogFolder,
        "image" : `/blogs/${blogFolder}/${image_file}`,
        "firstFileName" : firstFileName
      })
    })
  }
  getblogFolders();


  return (
    <div className="bg-bgcolor min-h-screen flex flex-col p-8">
      <h1 className="text-center font-semibold mt-14 tracking-widest kalam-regular">NOTE DOWN</h1>
      <div className="grid grid-cols-1  gap-8 md:grid-cols-2 xl:grid-cols-3 mx-auto xl:gap-28 mt-16">
        {blogs.map((blog, index) => (
          <Link href={`/blog/${blog.name}/${blog.firstFileName}`} key={index} className="border border-gray-500 rounded-lg  shadow-md shadow-gray-800">
            <Image src={blog.image} width={384} height={280} alt="blogImage" className=" rounded-tr-lg rounded-tl-lg"/>
            <h1 className="text-xl my-2 mx-4 text-primary font-bold">{blog.name}</h1>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Blog;
