import { WhiteAppleLogo } from "../assets/index";
import { Link } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function ModularSection() {
  return (
    <section className="modular-section">
      {/* <img src={AppleWatch} alt={'apple watch'}/>
      <img src={IpadPro} alt={'apple ipad pro'}/>
      <img src={Imac} alt={'apple iMac'}/>
      <img src={BackToSchool} alt={'back to school offer'}/>
      <img src={AppleFitness} alt={'apple fitness'} style={{width: '85vw', margin: '50px auto'}}/> */}
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
              href={"https://www.apple.com/apple-watch-series-6/"}
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
              href={"https://www.apple.com/apple-watch-series-6/"}
              style={{ color: "#2196f3" }}
            >
              Learn More
              <ArrowForwardIosIcon
                style={{ marginLeft: "3px", fontSize: "15px" }}
              />
            </Link>
            <Link
              href={"https://www.apple.com/apple-watch-series-6/"}
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
        <figure style={{textAlign: 'center', paddingBottom: '130px'}}>
          <h2 style={{ marginTop: "100px" }}>iMac</h2>
          <h3 style={{ marginTop: "0px", color: "black", textShadow: 'none', fontWeight: 600 }}>Say hello.</h3>
          <h4 style={{ marginTop: "5px", color: "black", textShadow: 'none' }}>From $1299 </h4>
          <Link
            href={"https://www.apple.com/apple-watch-series-6/"}
            style={{ color: "white", backgroundColor: "#2196f3", padding: '15px 30px', borderRadius: '50px', margin: '10px ' }}
          >
            Buy
          </Link>
          <Link
            href={"https://www.apple.com/apple-watch-series-6/"}
            style={{ color: "#2196f3", paddingTop: '50px' }}
          >
            Learn More
            <ArrowForwardIosIcon
              style={{ marginLeft: "3px", fontSize: "15px" }}
            />
          </Link>
        </figure>
      </section>
      <section className="modular-section-content-4" />
      <section className="modular-section-content-5" />
      <section className="modular-section-content-6" />
    </section>
  );
}
