import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Loading.css"

const Loading = () => {
    return <CircularProgress className="pink-loader" size={90} />
}

export default Loading;