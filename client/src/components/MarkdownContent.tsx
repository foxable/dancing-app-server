import * as React from "react";
import * as marked from "marked";
import { Content } from "bloomer";

interface IMarkdownContentProps
{
    text: string;
}

const MarkdownContent = (props: IMarkdownContentProps) =>
{
    const innerHtml = { __html: marked(props.text) };
        
    return <Content dangerouslySetInnerHTML={innerHtml}/>;
}

export default MarkdownContent;