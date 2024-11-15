import pic from "../assets/pic.png";
export default function Header() {
  return (
    <div className='header'>
      <img
        src={pic}
        alt=''
      />
      <h2>Laura Smith</h2>
      <h5>Frontend Developer</h5>
      <small>laurasmith.website</small>
    </div>
  );
}
