import React from "react"
import ButtonAppBar from "../components/app_bar"

export default class Layout extends React.Component {
    render() {
        return (
            <div className="container">
                <ButtonAppBar/>
            </div>
        );
    }
}
