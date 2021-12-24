import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">“Blogging is about making <br /> information creation available to anyone.”</span>
        {/* <span className="headerTitleLg">Bloggingful</span> */}
      </div>
      <img
        className="headerImg"
        // src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        // src="https://images.pexels.com/photos/7112/woman-typing-writing-windows.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        src="https://images.pexels.com/photos/3183162/pexels-photo-3183162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
