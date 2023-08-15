import React from "react";

export default function ImageUpload() {
  const imageForm = React.useRef(null);
  const imageInput = React.useRef(null);

 function handleFormSubmit(){
  console.log("submit")
 }
  return (
    <div>
      <h1>Image Upload Test Area</h1>
      <form ref={imageForm} onSubmit={handleFormSubmit}>
        <input ref={imageInput} type="file" accept="image/*" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
