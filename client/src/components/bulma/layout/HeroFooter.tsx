import * as React from "react";
import * as classNames from "classnames";

export const HeroFooter: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = (props): JSX.Element => {
    const heroFooterClass = classNames("hero-foot", props.className);
    return (
        <div className={heroFooterClass} {...props}>
            {props.children}
        </div>
    );
}