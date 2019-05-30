import * as React from "react";
import * as classNames from "classnames";

import { isClass } from "../helpers";

export type HeroColor = "primary" | "info" | "success" | "warning" | "danger" | "light" | "dark";
export type HeroSize = "medium" | "large" | "fullheight";

export interface IHeroProps
{
    isColor?: HeroColor;
    isSize?: HeroSize;
}

export const Hero: React.FunctionComponent<IHeroProps & React.HTMLProps<HTMLElement>> = ({ isColor, isSize, className, children, ...props }): JSX.Element => {
    className = classNames("hero",
        isClass(isColor),
        isClass(isSize),
        className
    );
    return (
        <section className={className} {...props}>
            {children}
        </section>
    );
};