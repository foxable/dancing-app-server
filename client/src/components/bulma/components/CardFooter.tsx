import * as React from "react";
import * as classNames from "classnames";

export const CardFooter: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
    const cardFooterClass = classNames(
        "card-footer",
        className
    );

    return <div className={cardFooterClass} {...props}></div>;
};