import * as React from "react";
import * as classNames from "classnames";

import { is, isClass } from "../helpers";

export interface ITagProps
{
    isColor?: TagColor;
    isSize?: TagSize;
    isRounded?: boolean;
    isDelete?: boolean;
}

export type TagColor = "black" | "dark" | "light" | "white" | "primary" | "link" | "info" | "success" | "warning" | "danger";
export type TagSize = "normal" | "medium" | "large";

export const Tag: React.FunctionComponent<ITagProps & React.HTMLProps<HTMLDivElement>> = ({ isColor, isSize, isRounded, isDelete, className, children, ...props }): JSX.Element => {
    className = classNames(
        "tag",
        isClass(isColor),
        isClass(isSize),
        is("rounded", isRounded),
        is("delete", isDelete),
        className
    );
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
};