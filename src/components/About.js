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
      <a className="aboutLinks" href="https://lorraineleslie.ca"
            target={'_blank'} rel='noreferrer'><p className="guideParagraph">Lorraine Leslie - Front-End Developer</p></a>
      <a className="aboutLinks" href="https://emilydsarani.com/" target={'_blank'} rel='noreferrer'><p className="guideParagraph">Emily Sarani - Full-Stack Developer</p></a>
      <a className="aboutLinks" href="https://www.linkedin.com/in/tochukwu-idinmachi-mba-pmp%C2%AE-476b2115/" target={'_blank'} rel='noreferrer'><p className="guideParagraph">Tochukwu Idinmachi - Product Manager</p></a>
      <a className="aboutLinks" href="https://www.oscarjosecoello.com/" target={'_blank'} rel='noreferrer'><p className="guideParagraph">Oscar Coello - Product Designer</p></a>
    </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default About;
