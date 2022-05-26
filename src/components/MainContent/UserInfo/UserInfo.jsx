import user from "./UserInfo.module.css";

export function UserInfo(props) {
  const fullName = `${props.name} ${props.surname}`;
  return (
    <div className={user.info}>
      <img
        src="https://i.insider.com/5484ecba69bedda54703ed52?width=700&format=jpeg&auto=webp"
        alt="avatar"
        className={user.info_img}
      ></img>
      <div className={user.info_description}>
        <h2>{fullName}</h2>
        <div>
          <div>Date of birth: 02 march</div>
          <div>City: Minsk</div>
          <div>Education: BSU'07</div>
          <div>Web Site: web.com</div>
        </div>
      </div>
    </div>
  );
}
