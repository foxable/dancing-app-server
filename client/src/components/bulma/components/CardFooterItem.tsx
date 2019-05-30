import * as React from "react";
import * as classNames from "classnames";

export const CardFooterItem: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({ className, children, ...props }): JSX.Element => {
    className = classNames(
        "card-footer-item",
        className
    );
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
};