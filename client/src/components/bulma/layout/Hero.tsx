import * as React from "react";
import * as classNames from "classnames";

export type HeroColor = "primary" | "info" | "success" | "warning" | "danger" | "light" | "dark";
export type HeroSize = "medium" | "large" | "fullheight";

export interface IHeroProps
{
    color?: HeroColor;
    size?: HeroSize;
}

export const Hero: React.FunctionComponent<IHeroProps & React.HTMLProps<HTMLElement>> = (props): JSX.Element => {
    const heroClass = classNames("hero", props.className, {
        [`is-${props.color}`]: props.color,
        [`is-${props.size}`]: props.size
    });
    return (
        <section className={heroClass} {...props}>
            {props.children}
        </section>
    );
};