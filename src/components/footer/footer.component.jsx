import React from "react";
import FooterLists from "./part-right/footer-Lists.component";
import LastRow from "./last row/last-row.component";
import PartTop from "./part-top/partTop.component";
const Footer = () => {
    return (
        <div>
            <PartTop/>
            <FooterLists/>
            <LastRow/>
        </div>
    );
}

export default Footer;