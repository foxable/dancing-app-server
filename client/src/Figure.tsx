import * as React from "react";
import { Card, CardHeader, CardHeaderTitle, CardContent, Tag, Content } from "bloomer";

import { IFigure } from "./ApiService";

interface IFigureProps
{
    data: IFigure;
}

interface IFigureState
{
    showDetails: boolean;
}

export default class App extends React.Component<IFigureProps, IFigureState>
{
    public constructor(props: IFigureProps)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = { showDetails: false };
    }

    public render(): JSX.Element
    {
        return (
            <Card isFullWidth onClick={this.handleClick}>
                <CardHeader>
                    <CardHeaderTitle>
                        {this.props.data.video_url ? <a href={this.props.data.video_url}>{this.props.data.name}</a> : this.props.data.name }
                        {this.props.data.level > 0 ? <Tag style={{ marginLeft: "1rem"}}>{this.props.data.level}</Tag> : "" }
                    </CardHeaderTitle>
                </CardHeader>
                {this.state.showDetails ?
                    <CardContent>
                        <Content style={{ whiteSpace: "pre" }}>{this.props.data.description}</Content>
                    </CardContent> : "" }                        
            </Card>
        );
    }

    private handleClick(): void
    {
        this.setState({ showDetails: !this.state.showDetails });
    }
}