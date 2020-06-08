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
    <div className={classes.Icon}>
      <FacebookShareButton url={props.url + props.articleId}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
    <div className={classes.Icon}>
      <TwitterShareButton url={props.url + props.articleId}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
    <div className={classes.Icon}>
      <LinkedinShareButton url={props.url + props.articleId}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
    <div className={classes.Icon}>
      <WhatsappShareButton url={props.url + props.articleId}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
    <div className={classes.Icon}>
      <EmailShareButton url={props.url + props.articleId}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  </div>
);

export default socialShare;
