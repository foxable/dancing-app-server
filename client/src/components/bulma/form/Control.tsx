import * as React from "react";
import * as classNames from "classnames";

export interface IControlProps extends React.HTMLProps<HTMLDivElement>
{
    isExpanded?: boolean;
}

export const Control: React.FunctionComponent<IControlProps> = ({ isExpanded, className, ...props }: IControlProps) => {
    const controlClass = classNames(
        "control",
        {
            "is-expanded": isExpanded
        },
        className,
    );

    return <div className={controlClass} {...props}></div>;
};