import * as React from "react";
import * as classNames from "classnames";

import { is } from "../helpers";

export interface ISelectProps
{
    isMultiple?: boolean;
    isSmall?: boolean;
    isMedium?: boolean;
    isLarge?: boolean;
    isFullWidth?: boolean;
}

export const Select: React.FunctionComponent<ISelectProps & React.HTMLProps<HTMLSelectElement>> = ({ isMultiple, isSmall, isMedium, isLarge, isFullWidth, className, children, ...props }): JSX.Element => {
    className = classNames(
        "select",
        is("multiple", isMultiple),
        is("small", isSmall),
        is("medium", isMedium),
        is("large", isLarge),
        is("fullwidth", isFullWidth),
        className,
    );
    return (
        <div className={className}>
            <select {...props}>
                {children}
            </select>            
        </div>
    );
};