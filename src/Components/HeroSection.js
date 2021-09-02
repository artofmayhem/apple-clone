import { Link } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function HeroSection() {
  return (
    <section className="hero-content">
      <h2>iPhone 12 Pro</h2>
      <h3>Blast past fast.</h3>
      <h4>From $41.62/mo. for 24 mo. ir $999 before trade-in</h4>
      <h4>Buy directly from Apple with special carrier offers</h4>
      <section className={"button-section"}>
        <Link
          href={"https://www.apple.com/iphone-12-pro/"}
          style={{ color: "#2196f3" }}
        >
          Learn More
          <ArrowForwardIosIcon
            style={{ marginLeft: "3px", fontSize: "15px" }}
          />
        </Link>
        <Link
          href={"https://www.apple.com/us/shop/goto/buy_iphone/iphone_12_pro"}
          style={{ color: "#2196f3" }}
        >
          Buy
          <ArrowForwardIosIcon
            style={{ marginLeft: "3px", fontSize: "15px" }}
          />
        </Link>
      </section>
    </section>
  );
}
