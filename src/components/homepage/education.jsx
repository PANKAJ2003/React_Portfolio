import React from "react";

import "./styles/article.css";

const Article = (props) => {
	const { title, description, date} = props;

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
					<div className="homepage-article-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="homepage-article-title">{title}</div>
					<div className="homepage-article-description">
						{description}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
