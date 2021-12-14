import React from "react";

const TextEditor = () => {
  return (
    <>
      <label class="form-label" for="postTitle">
        Title
      </label>
      <input type="text" id="postTitle" class="mb-4 form-control"></input>
      <button type="button" class="mb-4 btn btn-outline-primary">
        Add Media
      </button>
    </>
  );
};

export default TextEditor;
