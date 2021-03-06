import { WhiteAppleLogo } from "../assets/index";
import { Link } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CallMadeIcon from "@material-ui/icons/CallMade";

export default function ModularSection() {
  return (
    <section className="modular-section">
      <section className="modular-section-content-1">
        <figure>
          <section className={"watch-branding"}>
            <img src={WhiteAppleLogo} alt={"apple watch"} />
            <h2>WATCH</h2>
          </section>
          <h4>Series 6</h4>
          <h4 style={{ marginTop: "15px", color: "white" }}>
            The future of health.
          </h4>
          <h4 style={{ color: "white" }}>On your wrist</h4>
          <section className={"button-section"} style={{ width: "140%" }}>
            <Link
              href={"https://www.apple.com/apple-watch-series-6/"}
              style={{ color: "#2196f3" }}
            >
              Learn More
              <ArrowForwardIosIcon
                style={{ marginLeft: "3px", fontSize: "15px" }}
              />
            </Link>
            <Link
              href={"https://www.apple.com/us/shop/goto/apple_watch"}
              style={{ color: "#2196f3" }}
            >
              Buy
              <ArrowForwardIosIcon
                style={{ marginLeft: "3px", fontSize: "15px" }}
              />
            </Link>
          </section>
        </figure>
      </section>
      <section className="modular-section-content-2">
        <figure>
          <h2 style={{ marginTop: "100px" }}>iPad Pro</h2>
          <h4 style={{ marginTop: "15px", color: "white" }}>
            Supercharged by the M1 chip.
          </h4>
          <section className={"button-section"} style={{ width: "140%" }}>
            <Link
              href={"https://www.apple.com/ipad/"}
              style={{ color: "#2196f3" }}
            >
              Learn More
              <ArrowForwardIosIcon
                style={{ marginLeft: "3px", fontSize: "15px" }}
              />
            </Link>
            <Link
              href={"https://www.apple.com/us/shop/goto/ipad_pro/select"}
              style={{ color: "#2196f3" }}
            >
              Buy
              <ArrowForwardIosIcon
                style={{ marginLeft: "3px", fontSize: "15px" }}
              />
            </Link>
          </section>
        </figure>
      </section>
      <section className="modular-section-content-3">
        <figure style={{ textAlign: "center", paddingBottom: "130px" }}>
          <h2 style={{ marginTop: "100px" }}>iMac</h2>
          <h3
            style={{
              marginTop: "0px",
              color: "black",
              textShadow: "none",
              fontWeight: 600,
            }}
          >
            Say hello.
          </h3>
          <h4 style={{ marginTop: "5px", color: "black", textShadow: "none" }}>
            From $1299{" "}
          </h4>
          <Link
            href={"https://www.apple.com/apple-watch-series-6/"}
            style={{
              color: "white",
              backgroundColor: "#2196f3",
              padding: "15px 30px",
              borderRadius: "50px",
              margin: "10px ",
            }}
          >
            Buy
          </Link>
          <Link
            href={"https://www.apple.com/apple-watch-series-6/"}
            style={{ color: "#2196f3", paddingTop: "50px", fontSize: "20px" }}
          >
            Learn More
            <ArrowForwardIosIcon
              style={{ marginLeft: "3px", fontSize: "15px" }}
            />
          </Link>
        </figure>
      </section>
      <section className="modular-section-content-4" />
      <section className="modular-section-content-5">
        <section className={"fitness-content"}>
          <h2
            style={{
              color: "black",
              textShadow: "none",
            }}
          >
            FITNESS+
          </h2>
          <h4 style={{ textShadow: "none" }}>
            The first fitness service powered by Apple Watch.
          </h4>
          <h4 style={{ textShadow: "none" }}>Try if for 1 month free.</h4>
          <section className={"button-section2"}>
            <Link
              href={"https://www.apple.com/apple-watch-series-6/"}
              style={{ color: "#2196f3" }}
            >
              Learn More
              <ArrowForwardIosIcon
                style={{ marginRight: "30px", fontSize: "15px" }}
              />
            </Link>
            <Link
              href={"https://www.apple.com/us/shop/goto/apple_watch"}
              style={{ color: "#2196f3" }}
            >
              Try it Free!
              <CallMadeIcon style={{ marginLeft: "3px", fontSize: "15px" }} />
            </Link>
          </section>
        </section>
      </section>
      <section className="modular-section-content-6">
        <figure style={{ textAlign: "center", paddingBottom: "130px" }}>
          <h1>
            Racial Equality and <br /> Justice Initiative
          </h1>
          <Link
            href={"https://www.apple.com/apple-watch-series-6/"}
            style={{ color: "black", fontSize: "20px" }}
          >
            Learn More
            <ArrowForwardIosIcon
              style={{ marginLeft: "3px", fontSize: "15px" }}
            />
          </Link>
        </figure>
      </section>
    </section>
  );
}
