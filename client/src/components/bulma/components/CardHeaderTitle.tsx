import * as React from "react";
import * as classNames from "classnames";

export const CardHeaderTitle: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({ className, children, ...props }): JSX.Element => {
    className = classNames(
        "card-header-title",
        className
    );
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
};