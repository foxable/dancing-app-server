import * as React from "react";
import * as classNames from "classnames";

export const CardContent: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
    const cardContentClass = classNames(
        "card-content",
        className
    );

    return <div className={cardContentClass} {...props}></div>;
};