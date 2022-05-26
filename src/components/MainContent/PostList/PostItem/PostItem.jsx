import post from "./PostItem.module.css";

export function PostItem(props) {
  return (
    <div className={post.item}>
      <img
        src="https://i.insider.com/5484ecba69bedda54703ed52?width=700&format=jpeg&auto=webp"
        alt="icon"
        className={post.icon}
      />
      <p id={props.id} className={post.body}>
        {props.text}
      </p>
    </div>
  );
}
