import * as React from "react";
import * as classNames from "classnames";

export const CardFooterItem: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
    const cardFooterItemClass = classNames(
        "card-footer-item",
        className
    );

    return <div className={cardFooterItemClass} {...props}></div>;
};