import AboutImage from '../assets/thrift_picture.jpg'

const About = () => {
  return (
    <div>
        <img src={AboutImage} alt="" />
      <h4>About</h4>
      <p>
        We live in a world where fast fashion uses up an enormous amount of
        water to produce low quality products which contributes to increasing
        landfill waste. Unless you know your options, the idea of buying and
        donating used clothing pieces might feel daunting. Thrift Finder was
        built in an attempt to help lessen the damaging impacts of mass
        production and consumerism. What you see is only the beginning. LETO
        Solutions will be rolling out more features to fit our users’ needs. 
      </p>
      <p>The Team:</p>
      <p>Lorraine Leslie - Front-End Developer</p>
      <p>Emily Sarani - Full-Stack Developer</p>
      <p>Tochukwu Idinmachi - Product Manager</p>
      <p>Oscar Coello - Product Designer</p>
    </div>
  );
};

export default About;
