import * as React from "react";
import * as classNames from "classnames";

export const CardHeader: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({ className, children, ...props }): JSX.Element => {
    className = classNames(
        "card-header",
        className
    );
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
};