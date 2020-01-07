import React from "react";
import classNames from "classnames";

export const HeroFooter: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
    const heroFooterClass = classNames(
        "hero-foot",
        className
    );

    return <div className={heroFooterClass} {...props}></div>;
}