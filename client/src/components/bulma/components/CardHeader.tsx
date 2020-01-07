import React from "react";
import classNames from "classnames";

export const CardHeader: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
    const cardHeaderClass = classNames(
        "card-header",
        className
    );

    return <div className={cardHeaderClass} {...props}></div>;
};