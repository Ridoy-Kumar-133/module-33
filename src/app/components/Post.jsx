import Image from "next/image";
import Link from "next/link";
import React from "react";

const Post = ({post}) => {
    const {id,title, author, description, image } = post;
    return (
        <div className="card bg-base-100  shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>
                    {post.description}
                </p>
            </div>
            <figure>
                <Image
                className="my-3 rounded-2xl"
                    height={500}
                    width={500}
                    src={post.image}
                    alt="Shoes"
                />
            </figure>

            <div>
                <Link href= {`/blogs/${id}`} >
                <button className="btn btn-success rounded-2xl m-5">Vide Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Post;
