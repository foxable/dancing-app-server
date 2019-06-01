import * as React from "react";
import * as marked from "marked";

import { Content } from "./bulma";

interface IMarkdownContentProps
{
    text: string;
}

export const MarkdownContent: React.FunctionComponent<IMarkdownContentProps> = ({ text }: IMarkdownContentProps) =>
{
    const innerHtml = { __html: marked(text) };
        
    return <Content dangerouslySetInnerHTML={innerHtml}/>;
};