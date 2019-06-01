import * as React from "react";
import * as classNames from "classnames";

import { is } from "../helpers";

export interface ITabsProps
{
    isCentered?: boolean;
    isRight?: boolean;
    isSmall?: boolean;
    isMedium?: boolean;
    isLarge?: boolean;
    isBoxed?: boolean;
    isToggle?: boolean;
    isToggleRounded?: boolean;
    isFullWidth?: boolean;
}

export const Tabs: React.FunctionComponent<ITabsProps & React.HTMLProps<HTMLDivElement>> = ({ isCentered, isRight, isSmall, isMedium, isLarge, isBoxed, isToggle, isToggleRounded, isFullWidth, className, children, ...props }): JSX.Element => {
    className = classNames(
        "tabs",
        is("centered", isCentered),
        is("right", isRight),
        is("small", isSmall),
        is("medium", isMedium),
        is("large", isLarge),
        is("boxed", isBoxed),
        is("toggle", isToggle),
        is("toggle-rounded", isToggleRounded),
        is("fullwidth", isFullWidth),
        className
    );
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
};