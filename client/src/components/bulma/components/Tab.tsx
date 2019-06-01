import * as React from "react";
import * as classNames from "classnames";

import { is } from "../helpers";

export interface ITabProps
{
    isActive?: boolean;
}

export const Tab: React.FunctionComponent<ITabProps & React.HTMLProps<HTMLLIElement>> = ({ isActive, className, children, ...props }): JSX.Element => {
    className = classNames(
        is("active", isActive),
        className
    );
    return <li className={className} {...props}>{children}</li>;
};