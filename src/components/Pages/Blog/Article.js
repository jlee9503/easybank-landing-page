import React from "react";
import {
	ArticleContainer,
	Img,
	Author,
	ArticleTitle,
	Summary,
} from "./Article.elements";

const Article = ({ img, author, title, summary }) => {
	return (
		<>
			<ArticleContainer>
				<Img src={`${process.env.PUBLIC_URL + img}`} />
				<Author>{author}</Author>
				<ArticleTitle>{title}</ArticleTitle>
				<Summary>{summary}</Summary>
			</ArticleContainer>
		</>
	);
};

export default Article;
