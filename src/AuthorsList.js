import React from "react";
import SearchBar from "./SearchBar";

// Components
import AuthorCard from "./AuthorCard";

function AuthorsList(props) {
  const authorCards = props.authors.map(author => (
    <AuthorCard
      key={author.first_name + author.last_name}
      author={author}
      selectAuthor={props.selectAuthor}
    />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <SearchBar filterAuthors={props.filterAuthors} />
      <div className="row">{authorCards}</div>
    </div>
  );
}

export default AuthorsList;
