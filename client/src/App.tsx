import * as React from "react";

interface AppProps
{
    client: DirectusSDK;
}

interface AppState
{
    dances: Dance[];
}

interface Dance
{
    name: string;
    figures: Figure[];
}

interface Figure
{
    name: string;
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
        this.props.client.getItems("dances")
            .then(dances => this.setState({ ...this.state, dances }));
    }
}