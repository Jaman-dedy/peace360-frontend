import React from "react";
import classes from "./SocialShare.module.scss";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const socialShare = (props) => (
  <div className={classes.SocialShare}>
    {console.log("props", props)}
    <div className={classes.Icon}>
      <FacebookShareButton url={props.shareUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
    <div className={classes.Icon}>
      <TwitterShareButton>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
    <div className={classes.Icon}>
      <LinkedinShareButton>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
    <div className={classes.Icon}>
      <WhatsappShareButton>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
    <div className={classes.Icon}>
      <EmailShareButton>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  </div>
);

export default socialShare;
