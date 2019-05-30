import * as React from "react";
import * as classNames from "classnames";

import { is } from "../helpers";

export interface IContainerProps
{
    isFluid?: boolean;
    isWidescreen?: boolean;
    isFullHd?: boolean;
}

export const Container: React.FunctionComponent<IContainerProps & React.HTMLProps<HTMLDivElement>> = ({ isFluid, isWidescreen, isFullHd, className, children, ...props }): JSX.Element => {
    className = classNames(
        "container",        
        is("fluid", isFluid),
        is("widescreen", isWidescreen),
        is("fullhd", isFullHd),
        className,
    );
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
};