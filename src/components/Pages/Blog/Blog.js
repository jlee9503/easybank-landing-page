import React from "react";
import Article from "./Article";
import {
	BlogData,
	article__1,
	article__2,
	article__3,
	article__4,
} from "./Data";
import { BlogContainer, Title, ArticleSection } from "./Blog.element";

const Blog = () => {
	return (
		<>
			<BlogContainer>
				<Title>{BlogData.title}</Title>
				<ArticleSection>
					<Article {...article__1} />
					<Article {...article__2} />
					<Article {...article__3} />
					<Article {...article__4} />
				</ArticleSection>
			</BlogContainer>
		</>
	);
};

export default Blog;
