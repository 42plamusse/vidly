import React from "react";

const SearchBox = ({ onChange, value }) => {
  return (
    <input
      className="form-control my-3"
      name="query"
      type="text"
      placeholder="Search..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
