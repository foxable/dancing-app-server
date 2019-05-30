import * as React from "react";
import * as classNames from "classnames";

export const Section: React.FunctionComponent<React.HTMLProps<HTMLElement>> = ({ className, children, ...props }): JSX.Element => {
    className = classNames(
        "section",
        className
    );
    return (
        <section className={className} {...props}>
            {children}
        </section>
    );
};