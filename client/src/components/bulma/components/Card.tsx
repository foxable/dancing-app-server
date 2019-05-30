import * as React from "react";
import * as classNames from "classnames";

import { is } from "../helpers";

export interface ICardProps
{
    isFullWidth?: boolean;
}

export const Card: React.FunctionComponent<ICardProps & React.HTMLProps<HTMLDivElement>> = ({ isFullWidth, className, children, ...props }): JSX.Element => {
    className = classNames(
        "card",
        is("fullwidth", isFullWidth),
        className
    );
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
};