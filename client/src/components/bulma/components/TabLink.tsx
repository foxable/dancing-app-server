import * as React from "react";

export const TabLink: React.FunctionComponent<React.HTMLProps<HTMLAnchorElement>> = ({ children, ...props }): JSX.Element => {
    return <a {...props}>{children}</a>;
};