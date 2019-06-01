import * as React from "react";
import * as classNames from "classnames";

export const Field: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({ className, children, ...props }): JSX.Element => {
    className = classNames(
        "field",
        className,
    );
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
};