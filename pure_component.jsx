import React from "react";

class HeaderPureComponent extends React.PureComponent {
    render() {
        return <h4 style={{ padding: "10px 20px", textAlign: "center", color: "yellow"}}>Hello World! (React.PureComponent)</h4>
    }
}

export default HeaderPureComponent;
