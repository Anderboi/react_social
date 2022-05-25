import form from "./PostForm.module.css";

export function PostForm() {
  return (
    <div className={form.post_form}>
      <h4>Make new post</h4>
      <textarea
        name="post"
        id="post"
        cols="30"
        rows="2"
        placeholder="Type your text here..."
        className={form.input}
      ></textarea>
      <button type="submit" className={form.button}>
        Send post
      </button>
    </div>
  );
}
