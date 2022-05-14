const Footer = () => {

    const currentYear = new Date().getFullYear(); 
 
    

    return (
        <div className="footer">
            <p className="footerPara"> Copyright {currentYear} © Thrift Finder - Team LETO Solutions. All Rights Reserved</p>
        </div>
    )
}

export default Footer;