import * as React from "react";
import * as classNames from "classnames";

export const Section: React.FunctionComponent<React.HTMLProps<HTMLElement>> = (props): JSX.Element => {
    const sectionClass = classNames("section", props.className);
    return (
        <section className={sectionClass} {...props}>
            {props.children}
        </section>
    );
};