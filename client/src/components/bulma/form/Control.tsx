import * as React from "react";
import * as classNames from "classnames";

import { is } from "../helpers";

export interface IControlProps
{
    isExpanded?: boolean;
}

export const Control: React.FunctionComponent<IControlProps & React.HTMLProps<HTMLDivElement>> = ({ isExpanded, className, children, ...props }): JSX.Element => {
    className = classNames(
        "control",
        is("expanded", isExpanded),
        className,
    );
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
};