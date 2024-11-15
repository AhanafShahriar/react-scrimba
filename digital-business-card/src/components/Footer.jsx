import facebookIcon from "../assets/icons/fb.png";
import twitterIcon from "../assets/icons/twitter.png";
import instagramIcon from "../assets/icons/instagram.png";
import githubIcon from "../assets/icons/github.png";

export default function Footer() {
  return (
    <div className='icons'>
      <img
        src={twitterIcon}
        alt=''
      />
      <img
        src={facebookIcon}
        alt=''
      />
      <img
        src={instagramIcon}
        alt=''
      />
      <img
        src={githubIcon}
        alt=''
      />
    </div>
  );
}
