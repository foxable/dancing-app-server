import * as React from "react";
import * as classNames from "classnames";

export const CardHeaderTitle: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
    const cardHeaderTitleClass = classNames(
        "card-header-title",
        className
    );

    return <div className={cardHeaderTitleClass} {...props}></div>;
};