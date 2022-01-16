import React from "react";
import { Fragment } from "react";
import Navigation from "../Navigation/Nav";

function Layout(props){
    return(
        <Fragment>
            <Navigation />
            <main>{props.children}</main>
        </Fragment>
    )

}

export default Layout;