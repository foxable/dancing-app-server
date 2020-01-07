import React from "react";
import classNames from "classnames";

export interface ITabsProps extends React.HTMLProps<HTMLDivElement>
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

export const Tabs: React.FunctionComponent<ITabsProps> = ({ isCentered, isRight, isSmall, isMedium, isLarge, isBoxed, isToggle, isToggleRounded, isFullWidth, className, ...props }: ITabsProps) => {
    const tabsClass = classNames(
        "tabs",
        {
            "is-centered": isCentered,
            "is-right": isRight,
            "is-small": isSmall,
            "is-medium": isMedium,
            "is-large": isLarge,
            "is-boxed": isBoxed,
            "is-toggle": isToggle,
            "is-toggle-rounded": isToggleRounded,
            "is-fullwidth": isFullWidth
        },
        className
    );

    return <div className={tabsClass} {...props}></div>;
};