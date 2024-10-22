import "./card.css";
import ballon from "../assets/ballon.png";
import user from "../assets/william.svg";
import william from "../assets/user.svg";
import bridge from "../assets/bridge.png";
import field from "../assets/field.png";
import sea from "../assets/sea.png";
import smooth from "../assets/smooth.png";
import rainbow from "../assets/rainbow.png";

function Card() {
  return (
    <div className="card">
      <div className="container">
        <div className="feature__title">
          <p> Most Recent</p>
          <hr />
        </div>
        <div className="card__wrapper">
          <div className="card__item">
            <div className="card__image">
              <img src={ballon} alt="" />
            </div>
            <div className="card__desc">
              <span>Still Standing Tall</span>
              <p>Life begins at the end of your comfort zone.</p>
              <div className="card__user">
                <div className="card__logo">
                  <img src={user} alt="" />
                  <p>William Wong</p>
                </div>
                <p>9/25/2015</p>
              </div>
            </div>
          </div>
          <div className="card__item">
            <div className="card__image">
              <img src={bridge} alt="" />
            </div>
            <div className="card__desc">
              <span>Sunny Side Up</span>
              <p>No place is ever as bad as they tell you it’s going to be.</p>
              <div className="card__user">
                <div className="card__logo">
                  <img src={william} alt="" />
                  <p>Mat Vogels</p>
                </div>
                <p>9/25/2015</p>
              </div>
            </div>
          </div>
          <div className="card__item">
            <div className="card__image">
              <img src={field} alt="" />
            </div>
            <div className="card__desc">
              <span>Water Fallsp</span>
              <p>
                We travel not to escape life, but for life not to escape us.
              </p>
              <div className="card__user">
                <div className="card__logo">
                  <img src={william} alt="" />
                  <p>Mat Vogels</p>
                </div>
                <p>9/25/2015</p>
              </div>
            </div>
          </div>
          <div className="card__item">
            <div className="card__image">
              <img src={sea} alt="" />
            </div>
            <div className="card__desc">
              <span>Through the Mist</span>
              <p>
                Travel makes you see what a tiny place you occupy in the world.
              </p>
              <div className="card__user">
                <div className="card__logo">
                  <img src={user} alt="" />
                  <p>William Wong</p>
                </div>
                <p>9/25/2015</p>
              </div>
            </div>
          </div>
          <div className="card__item">
            <div className="card__image">
              <img src={smooth} alt="" />
            </div>
            <div className="card__desc">
              <span>Awaken Early</span>
              <p>
                Not all those who wander are lost. Not all those who wander are
                lost.
              </p>
              <div className="card__user">
                <div className="card__logo">
                  <img src={william} alt="" />
                  <p>Mat Vogels</p>
                </div>
                <p>9/25/2015</p>
              </div>
            </div>
          </div>
          <div className="card__item">
            <div className="card__image">
              <img src={rainbow} alt="" />
            </div>
            <div className="card__desc">
              <span>Try it Always</span>
              <p>
                The world is a book, and those who do not travel read only one
                page.
              </p>
              <div className="card__user">
                <div className="card__logo">
                  <img src={william} alt="" />
                  <p>Mat Vogels</p>
                </div>
                <p>9/25/2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
