import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img className="aboutImg"
          src="https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <p>
          This is a blog application build with the intention to give all the writter a platform where they get a chance to flaunt their writing skills in front of everyone and also for all the blog lovers to read all types of blogs under a single platform.
        </p>
      </div>

      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div> */}

      <div className="sidebarItem">
        <span className="sidebarTitle">DEVELOPER</span>
        <img className="devloper"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1628782770585/WNZOFXg9t.jpeg"
          alt=""
        />
        <p className="devDetails">
          Simran Gangwani <br /><span className="designation">Full-stack web Developer <br />Graphic Designer</span>
          <div className="sidebarSocial">
            <i class="sidebarIcon fab fa-twitter"></i>
            <i class="sidebarIcon fab fa-github-alt"></i>
            <i class="sidebarIcon fab fa-linkedin-in"></i>
            <i class="sidebarIcon fab fa-instagram"></i>
          </div>
          {/* <hr className="border" /> */}
        </p>
      </div>
    </div>
  );
}
