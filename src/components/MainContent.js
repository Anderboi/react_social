import { UserInfo } from "./UserInfo";

export function MainContent() {
  return (
    <div className="content">
      <img
        src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&auto=format&fit=max&s=56d5de4c5609ca98def0c3382bd569b4"
        alt="hero"
      ></img>
      {/* Hero image */}
      <UserInfo />
      {/* Info User Block  */}
      <div></div>
      {/* New Post */}
      <div></div>
      {/* Posts */}
    </div>
  );
}
