import * as React from "react";
import * as classNames from "classnames";

export interface ICardProps extends React.HTMLProps<HTMLDivElement>
{
    isFullWidth?: boolean;
}

export const Card: React.FunctionComponent<ICardProps> = ({ isFullWidth, ...props }: ICardProps) => {
    const cardClass = classNames(
        "card",
        {
            "is-fullwidth": isFullWidth
        },
        props
    );

    return <div className={cardClass} {...props}></div>;
};