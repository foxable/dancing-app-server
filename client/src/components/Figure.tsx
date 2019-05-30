import * as React from "react";

import { IFigure } from "../DataService";
import { Card, CardHeader, CardHeaderTitle, CardContent, CardFooter, CardFooterItem, Tag } from "./bulma";
import MarkdownContent from "./MarkdownContent";

interface IFigureProps
{
    data: IFigure;
}

interface IFigureState
{
    showDetails: boolean;
}

export default class Figure extends React.Component<IFigureProps, IFigureState>
{
    public constructor(props: IFigureProps)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = { showDetails: false };
    }

    public render(): JSX.Element
    {
        const tagStyle = { marginLeft: "1rem" };
        return (
            <Card isFullWidth onClick={this.handleClick}>
                <CardHeader>
                    <CardHeaderTitle>
                        {this.props.data.name}
                        {this.props.data.level === 0
                            ? <Tag style={tagStyle} isColor="info">W</Tag>
                            : <Tag style={tagStyle} isColor="light">{this.props.data.level}</Tag> }
                    </CardHeaderTitle>
                </CardHeader>
                {this.state.showDetails ?
                    <>
                        { this.props.data.description && <CardContent><MarkdownContent text={this.props.data.description}/></CardContent> }
                        { this.props.data.video_url && <CardFooter><CardFooterItem href={this.props.data.video_url}>Video</CardFooterItem></CardFooter> }
                    </> : "" }
            </Card>
        );
    }

    private handleClick(): void
    {
        this.setState({ showDetails: !this.state.showDetails });
    }
}