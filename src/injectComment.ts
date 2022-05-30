var sideBarContent = document.getElementsByClassName("theRail")[0];
var hardCodeHtml = `
<div class="BigMiaoComment" style="height: 1000px;">
<p>Comments</p>
</div>
`;

var hardCodeElement = document.createElement("div");
sideBarContent?.insertAdjacentHTML("beforeend", hardCodeHtml);
