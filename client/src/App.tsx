import * as React from "react";

import { ApiService, Dance } from "./ApiService";

interface AppProps
{
    api: ApiService;
}

interface AppState
{
    dances: Dance[];
}

export default class App extends React.Component<AppProps, AppState>
{
    public constructor(props: AppProps)
    {
        super(props);
        this.state = {
            dances: []
        };
    }

    public componentDidMount(): void
    {
        this.props.api.fetchDances()
            .then(dances => this.setState({ ...this.state, dances }));
    }

    public render(): JSX.Element
    {
        return (
            <ul>
                {this.state.dances.map(_ => <li>{_.name}</li>)}
            </ul>
        );
    }
}