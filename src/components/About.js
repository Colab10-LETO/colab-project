import Footer from "./Footer";

const About = () => {
  return (
    <div>
    <div className="guideBackground">
      <div className="guideStyle">
      <h4>About</h4>
      <p className="guideParagraph">
        We live in a world where fast fashion uses up an enormous amount of
        water to produce low quality products which contributes to increasing
        landfill waste. Unless you know your options, the idea of buying and
        donating used clothing pieces might feel daunting. Thrift Finder was
        built in an attempt to help lessen the damaging impacts of mass
        production and consumerism. What you see is only the beginning. LETO
        Solutions will be rolling out more features to fit our users’ needs. 
      </p>
      <h5>The Team:</h5>
      <p className="guideParagraph">Lorraine Leslie - Front-End Developer</p>
      <p className="guideParagraph">Emily Sarani - Full-Stack Developer</p>
      <p className="guideParagraph">Tochukwu Idinmachi - Product Manager</p>
      <p className="guideParagraph">Oscar Coello - Product Designer</p>
    </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default About;
