import * as React from "react"
import * as d3 from "d3-selection"
import Grid from "./Grid";

type Props ={

}


export default class Draw extends React.Component<Props> {

  rootNode: any;
  ref: SVGSVGElement;

  constructor(props: Props) {
    super(props);
  }

  componentDidMount(){
    d3.select(this.ref)
    .append("circle")
    .attr("r", 51)
    .attr("cx", 150)
    .attr("cy", 150)
    .attr("fill", "red");
  }

  render() {
    return (
      <svg className="container" ref={(ref: SVGSVGElement) => this.ref = ref}
      width={300} height={300}>
      </svg>
    )
  }
}




