// import ReactPlayer from "react-player";
// import {VideoAsset} from '../assets/index'
import { Link } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


export default function MacbookSection() {
  return (
    <section id="macbookbackground">
      {/* <ReactPlayer
              url={VideoAsset}
              playing={true}
              loop={true}
              height="115vh"
              width="100vw"
              style={{ margin: '15px 0', height: "100vh", width: "100vw", background: 'white' }}
              id={"video-player"}
              playsinline={true}
            /> */}
      <section className="macbook-container">
        <h2>Macbook Pro</h2>
        <h3>Say hello.</h3>
        <h4>From $1299</h4>
        <h4>Now featuring the new, blazing fast M1 chip</h4>
        <section className={"button-section"}>
        <Link
          className={"button"}
          href={"https://www.apple.com/iphone-12-pro/"}
          style={{ color: "#2196f3" }}
        >
          Learn More
          <ArrowForwardIosIcon
            style={{ marginLeft: "3px", fontSize: "15px" }}
          />
        </Link>
        <Link
          className={"button"}
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
    </section>
  );
}
