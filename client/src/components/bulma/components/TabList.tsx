import * as React from "react";

export const TabList: React.FunctionComponent<React.HTMLProps<HTMLUListElement>> = ({ children, ...props }): JSX.Element => {
    return <ul {...props}>{children}</ul>;
};