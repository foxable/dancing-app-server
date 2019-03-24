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
            <tr>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.level}</td>
                <td>{this.props.data.video_url ? <a href={this.props.data.video_url}>Video</a> : "" }</td>
            </tr>
        );
    }
}