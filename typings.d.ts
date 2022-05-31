declare module "*.module.css";
declare module "*.svg" {
    import React = require("react");
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

declare module "*.jpg" {
    const src: string;
    export default src;
}
