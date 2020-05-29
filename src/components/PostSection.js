import React from "react";

import PostCard from "../components/PostCard";
import "./PostSection.scss";

class PostSection extends React.Component {
  static defaultProps = {
    posts: [],
    title: "",
    limit: 12,
    showLoadMore: true,
    loadMoreTitle: "Load More",
    perPageLimit: 12
  };

  state = {
    limit: this.props.limit
  };

  increaseLimit = () =>
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }));

  render() {
    const { posts, title, showLoadMore, loadMoreTitle } = this.props,
      { limit } = this.state,
      visiblePosts = posts.slice(0, limit || posts.length);

    return (
      <>
        {title && (
          <div className="row">
            <div className="col-12">
              <h2 className="PostSection--Title">{title}</h2>
            </div>
          </div>
        )}
        {!!visiblePosts.length && (
          <div className="row">
            {visiblePosts.map((post, index) => (
              <div key={post.title + index} className="col-12 col-sm-12 col-md-4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
        {showLoadMore && visiblePosts.length < posts.length && (
          <div className="taCenter">
            <button className="button" onClick={this.increaseLimit} onKeyDown={this.increaseLimit}>
              {loadMoreTitle}
            </button>
          </div>
        )}
      </>
    );
  }
}

export default PostSection;
