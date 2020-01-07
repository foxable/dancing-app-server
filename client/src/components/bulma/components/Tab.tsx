import React from "react";
import classNames from "classnames";

export interface ITabProps extends React.HTMLProps<HTMLLIElement>
{
    isActive?: boolean;
}

export const Tab: React.FunctionComponent<ITabProps> = ({ isActive, className, ...props }: ITabProps) => {
    const tabClass = classNames(
        {
            "is-active": isActive
        },
        className
    );

    return <li className={tabClass} {...props}></li>;
};