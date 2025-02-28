import React, { Component } from "react";
import "./Carousel.css";
// import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
// class Carousel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currImg: 0,
//     };
//   }

//   render() {
//     return (
//       <div className="carousel">
//         <div
//           className="carouselInner"
//           style={{ backgroundImage: `url(${images[this.state.currImg].img})` }}
//         >
//           <div
//             className="left"
//             onClick={() => {
//               this.state.currImg > 0 &&
//                 this.setState({ currImg: this.state.currImg - 1 });
//             }}
//           >
//             <ArrowBackIosIcon style={{ fontSize: 30 }} />
//           </div>
//           <div className="center">
//             <h1>{images[this.state.currImg].title}</h1>
//             <p>{images[this.state.currImg].subtitle}</p>
//           </div>
//           <div
//             className="right"
//             onClick={() => {
//               this.state.currImg < images.length - 1 &&
//                 this.setState({ currImg: this.state.currImg + 1 });
//             }}
//           >
//             <ArrowForwardIosIcon style={{ fontSize: 30 }} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Carousel;

import { images } from "./../data/CarouselData";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currImg: 0,
    };
  }
  render() {
    return (
      <div className="carousel">
        <div
          className="carouselInner"
          style={{ backgroundImage: `url(${images[this.state.currImg].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              this.state.currImg > 0 &&
                this.setState({ currImg: this.state.currImg - 1 });
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: "35px" }} />
          </div>

          <div className="center">
            <h1>{images[this.state.currImg].title}</h1>
            <p>{images[this.state.currImg].subtitle}</p>
          </div>

          <div
            className="right"
            onClick={() => {
              this.state.currImg < images.length - 1 &&
                this.setState({ currImg: this.state.currImg + 1 });
            }}
          >
            <ArrowForwardIosIcon style={{ fontSize: "35px" }} />
          </div>
        </div>
      </div>
    );
  }
}
