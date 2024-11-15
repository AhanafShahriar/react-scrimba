import mailIcon from "../assets/icons/mail.png";
import linkedInIcon from "../assets/icons/linkedin.png";

export default function Buttons() {
  return (
    <div className='btns'>
      <button>
        <img src={mailIcon} />
        <p>Email</p>
      </button>
      <button className='linkedin'>
        <img src={linkedInIcon} />
        <p>LinkedIn</p>
      </button>
    </div>
  );
}
