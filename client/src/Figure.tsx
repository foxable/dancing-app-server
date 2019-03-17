import * as React from "react";

import { IFigure } from "./ApiService";

interface IFigureProps
{
    data: IFigure;
}

export default class App extends React.Component<IFigureProps, {}>
{
    public render(): JSX.Element
    {
        return (
            <li>
                <a href={this.props.data.video_url}>{this.props.data.name}</a>
            </li>
        );
    }
}