import React, {Component, Fragment} from "react";

import Header from "./Header"
import Content from "./Content"


export default class extends Component {
    render(){
    return (
       <Fragment>
          <Header />
           <Content />
       </Fragment>
     //React.createElement(
     //   Fragment ,
     //   null,
     //   React.createElement(Header, null),
     //   React.createElement(Content, null))
    );
    }
}