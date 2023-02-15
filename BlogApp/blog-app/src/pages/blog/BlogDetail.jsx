import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../../app/Service/blog.service";
import { formatDate } from "../../utils/functionUtils";

function BlogDetail() {
    const { blogId } = useParams();
    const { data: blog, isLoading } = useGetBlogByIdQuery(blogId);

    if (isLoading) {
        return <h2>Loading ...</h2>;
    }

    return (
        <>
            <main className="main">
                <article className="post-single">
                    <header className="post-header">
                        <h1 className="post-title">{blog.title}</h1>
                        <div className="post-meta">
                            <span>{formatDate(blog.publishedAt)}</span>
                        </div>
                    </header>
                    <div className="post-content">
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </div>
                </article>
            </main>
        </>
    );
}

export default BlogDetail;