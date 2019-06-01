import * as React from "react";
import * as classNames from "classnames";

export const Field: React.FunctionComponent<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }: React.HTMLProps<HTMLDivElement>) => {
    const fieldClass = classNames(
        "field",
        className,
    );

    return <div className={fieldClass} {...props}></div>;
};