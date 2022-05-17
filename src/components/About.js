import Footer from "./Footer";
import Lorraine from "../assets/Lorraine.png"
import Sarani from "../assets/Sarani.png"
import Tochukwu from "../assets/Tochukwu.png"
import Oscar from "../assets/Oscar.png"

const About = () => {
  return (
    <div>
      <div className="guideBackground">
        <div className="aboutStyle">
          <h4>About</h4>
          <p className="aboutParagraph">
            We live in a world where fast fashion uses up an enormous amount of
            water to produce low quality products which contributes to
            increasing landfill waste. Unless you know your options, the idea of
            buying and donating used clothing pieces might feel daunting. Thrift
            Finder was built in an attempt to help lessen the damaging impacts
            of mass production and consumerism. What you see is only the
            beginning. LETO Solutions will be rolling out more features to fit
            our users’ needs.
          </p>
          <h5>The Team:</h5>
          <p className="guideParagraph">
            <a
              className="aboutLinks"
              href="https://lorraineleslie.ca"
              target={"_blank"}
              rel="noreferrer"
            >
              Lorraine Leslie - Front-End Developer
            </a>
          </p>
          <p className="guideParagraph">
            <a
              className="aboutLinks"
              href="https://emilydsarani.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              Emily Sarani - Full-Stack Developer
            </a>
          </p>
          <p className="guideParagraph">
            <a
              className="aboutLinks"
              href="https://www.linkedin.com/in/tochukwu-idinmachi-mba-pmp%C2%AE-476b2115/"
              target={"_blank"}
              rel="noreferrer"
            >
              Tochukwu Idinmachi - Product Manager
            </a>
          </p>
          <p className="guideParagraph">
            <a
              className="aboutLinks"
              href="https://www.oscarjosecoello.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              Oscar Coello - Product Designer
            </a>
          </p>
          <div className="aboutImages">
            <img className="aboutImg" src={Lorraine} alt="" />
            <img className="aboutImg" src={Sarani} alt="" />
            <img className="aboutImg" src={Tochukwu} alt="" />
            <img className="aboutImg" src={Oscar} alt="" />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
