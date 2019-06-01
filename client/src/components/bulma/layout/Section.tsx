import * as React from "react";
import * as classNames from "classnames";

export const Section: React.FunctionComponent<React.HTMLProps<HTMLElement>> = ({ className, ...props }: React.HTMLProps<HTMLElement>) => {
    const sectionClass = classNames(
        "section",
        className
    );

    return <section className={sectionClass} {...props}></section>;
};