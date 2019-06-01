import * as React from "react";
import * as classNames from "classnames";

export interface ISelectProps extends React.HTMLProps<HTMLSelectElement>
{
    isMultiple?: boolean;
    isSmall?: boolean;
    isMedium?: boolean;
    isLarge?: boolean;
    isFullWidth?: boolean;
}

export const Select: React.FunctionComponent<ISelectProps> = ({ isMultiple, isSmall, isMedium, isLarge, isFullWidth, className, ...props }: ISelectProps) => {
    const selectClass = classNames(
        "select",
        {
            "is-multiple": isMultiple,
            "is-small": isSmall,
            "is-medium": isMedium,
            "is-large": isLarge,
            "is-fullwidth": isFullWidth
        },
        className,
    );
    return (
        <div className={selectClass}>
            <select {...props}></select>            
        </div>
    );
};