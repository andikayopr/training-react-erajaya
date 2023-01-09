import React from "react";
import { PropTypes } from "prop-types";

const SearchForm = (props) => {
  const { submit, change, value } = props;
  return (
    <form onSubmit={submit}>
      <div className="flex flex-row ">
      <div className="m-4 p-1 rounded-full w-full max-w-sm bg-gradient-to-r from-green-500 to-indigo-500">
        <input
          className="p-3 w-full rounded-full focus:outline-none"
          type="text"
          id="name"
          onChange={change}
          placeholder="type some movie title"
          value={value}
          autoComplete="false"
        />
      </div>
      <button className="btn rounded-full m-4 p-4 h-fit bg-gradient-to-t text-sm from-teal-600 to-cyan-600 text-white font-bold tracking-widest uppercase bg-size-200 bg-pos-0 hover:bg-pos-100">Search</button>
      </div>

    </form>
  );
};

SearchForm.propTypes = {
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchForm;
