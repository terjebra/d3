import * as React from "react"

import Grid from "./Grid";
import Draw from "./Draw";

type Props ={

}


export default class App extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
     <Draw/>
    )
  }
}




