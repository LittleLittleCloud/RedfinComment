import { Popup } from "./popup/component";
import * as React from "react";
import * as ReactDOM from "react-dom";

var sideBarContent = document.getElementsByClassName("theRail")[0];
var hardCodeHtml = `
<div class="BigMiaoComment" />
`;

sideBarContent?.insertAdjacentHTML("beforeend", hardCodeHtml);

ReactDOM.render(<Popup />, document.getElementsByClassName("BigMiaoComment")[0]);