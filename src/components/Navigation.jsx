import PolinguinLogo from "../assets/polinguin-logo.png";
export default function Navigation() {
  return (
    <div className="flex flex-row items-center">
      <img
        src={PolinguinLogo}
        alt="polinguinlogo"
        height="50"
        width="50"
        className="size-20 ml-5"
      />
      <div>
        <p className="text-3xl font-bold ">Polinguin</p>
      </div>
      <div className="ml-220">
        <a className="m-2" href="/">
          How to use
        </a>
        <a className="m-2" href="/">
          About us
        </a>
        <a className="m-2" href="/">
          Contact
        </a>
        <a className="m-2" href="/">
          Donation
        </a>
      </div>
    </div>
  );
}
