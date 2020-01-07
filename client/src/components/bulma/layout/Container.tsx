import React from "react";
import classNames from "classnames";

export interface IContainerProps extends React.HTMLProps<HTMLDivElement>
{
    isFluid?: boolean;
    isWidescreen?: boolean;
    isFullHd?: boolean;
}

export const Container: React.FunctionComponent<IContainerProps> = ({ isFluid, isWidescreen, isFullHd, className, ...props }: IContainerProps) => {
    const containerClass = classNames(
        "container",        
        {
            "is-fluid": isFluid,
            "is-widescreen": isWidescreen,
            "is-fullhd": isFullHd
        },
        className,
    );

    return <div className={containerClass} {...props}></div>;
};