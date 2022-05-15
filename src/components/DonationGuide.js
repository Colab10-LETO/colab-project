import Footer from "./Footer";

const DonationGuide = () => {
    return (
        <div>
        <div className="guideBackground">
            <div className="guideStyle">
            <h4>Clothing Donation Guide</h4>
            <p className="guideParagraph">Thrift stores often throw out items that they do not accept as donations, so we put together a guide to minimize textile waste and make your experience smoother.</p>
            <h5>Do an online search</h5>
            <p>Unless you are shipping your clothes to a donation center online, it’s best to go to local donation centers. Thrift Finder is a great tool for finding these donation centers or drop boxes. </p>

            <h5>Call homeless shelters</h5>
            <p className="guideParagraph">Going to Goodwill or Salvation Army may be the easiest option, and we are in no way discouraging this. However, a good way to help those in need is by reaching out to homeless shelters and asking what kind of items are needed. Shelters for women and children are another good resource for donating clothes.</p>

            <h5>Ask what donations are accepted</h5>
            <p className="guideParagraph">A good rule-of-thumb for donating clothes is to avoid donating undergarments like socks and underwear. You should also wash and dry the clothes you plan to donate, as many centers are not allowed to accept dirty or wet clothes. Additionally, it’s always a good idea to call ahead of time and ask if there’s any other restrictions these stores have on donated items. </p>

            <h5>Consider the location</h5>
            <p className="guideParagraph">The kind of items thrift stores sell depends on what donations they receive from the surrounding residential areas. If you’re looking for the latest design clothes, you may want to check out stores near college campuses or more affluent neighborhoods. If you are looking for maternity or baby clothes, check out stores near public schools or suburban neighborhoods.</p>

            <h5>The employees are your friends</h5>
            <p className="guideParagraph">Some wear and tear is expected with donated items, but how do you know your clothing is too damaged for donations? Ask the employees. They’ll let you know if the damage is something that’s easily repairable or they can refer you to textile recycling centers.</p>
        </div>
        </div>
        <Footer />
        </div>
        
    )
}

export default DonationGuide;