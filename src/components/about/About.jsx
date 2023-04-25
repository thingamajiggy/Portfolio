import "./about.css";
import Map from "../Map";

const About = () => {
  return (
    <div className="a">
      <div className="a-texts">
        <h1 className="a-title">About Me</h1>
      </div>
      <div className="a-desc">
        <p className="a-sub">
          <p className="a-adjust">
            {" "}
            I have travelled a lot since I graduated from university to discover
            what I really would like to do for my career.
          </p>
          <p className="a-adjust">
            {" "}
            I worked for a travel agency in Georgia for 6 months, then I became
            an Ecommerce Associate for a Korean online shop in Germany. Then
            life led me back to Seoul, and I worked on monitoring the news, and
            writing blogs - all related to PR and Digital Marketing. Now I am in
            the UK.
          </p>
          <p className="a-adjust">
            One day, I thought what if I made my own website where I can put all
            my overseas experiences. That is why I decided to learn coding. I
            remember when I worked as an Ecommerce Associate, our whole staff
            wanted to re-design the website in a slightly better way and fix
            some bugs that frequently happened in some function. However, there
            was no one who knew coding, so we could not do anything.
          </p>
          <p className="a-adjust">
            I would like to build, maintain, renew websites from the standpoint
            of customers, and eventually draw as many visitors as possible and
            help those visitors roam easily around the sites with my PR and
            marketing experience.
          </p>
        </p>
      </div>
      <div className="a-map">
        <Map />
      </div>
    </div>
  );
};

export default About;
