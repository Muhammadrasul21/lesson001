import "./feature.css";
import user from "../assets/user.svg";
import William from "../assets/william.svg";

function Feature() {
  return (
    <div className="feature">
      <div className="container">
        <div className="feature__title">
          <p>Featured Posts</p>
          <hr />
        </div>
        <div className="feature__cards">
          <div className="feature__item">
            <span>The Road Ahead</span>
            <p>The road ahead might be paved - it might not be.</p>
            <div className="item__user">
              <div className="feature__img">
                <img src={user} alt="" />
                <p>Mat Vogels</p>
              </div>
              <p>September 25, 2015</p>
            </div>
          </div>
          <div className="feature__item frame">
            <span>From Top Down</span>
            <p>Once a year, go someplace youve never been before.</p>
            <div className="item__user">
              <div className="feature__img">
                <img src={William} alt="" />
                <p>William Wong</p>
              </div>
              <p>September 25, 2015</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
