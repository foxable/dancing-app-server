import * as React from "react";
import * as classNames from "classnames";

export interface IContainerProps
{
    fluid?: boolean;
    widescreen?: boolean;
    fullhd?: boolean;
}

export const Container: React.FunctionComponent<IContainerProps & React.HTMLProps<HTMLDivElement>> = (props): JSX.Element => {
    const containerClass = classNames("container", props.className, {
        "is-fluid": props.fluid,
        "is-widescreen": props.widescreen,
        "is-fullhd": props.fullhd
    });
    return (
        <div className={containerClass} {...props}>
            {props.children}
        </div>
    );
};