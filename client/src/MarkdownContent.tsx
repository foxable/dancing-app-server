import * as React from "react";
import * as marked from "marked";

import { Content } from "bloomer";

interface IMarkdownContentProps
{
    text: string;
}

export default class MarkdownContent extends React.Component<IMarkdownContentProps, {}>
{
    public render(): JSX.Element
    {
        const innerHtml = { __html: marked(this.props.text) };
        return <Content dangerouslySetInnerHTML={innerHtml}/>;
    }
}