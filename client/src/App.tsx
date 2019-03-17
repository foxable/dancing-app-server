import * as React from "react";

import { ApiService, IDance } from "./ApiService";
import Dance from "./Dance";

interface IAppProps
{
    api: ApiService;
}

interface IAppState
{
    dances: IDance[];
}

export default class App extends React.Component<IAppProps, IAppState>
{
    public constructor(props: IAppProps)
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
                {this.state.dances.map(_ => <li key={_.abbr}><Dance data={_} api={this.props.api}/></li>)}
            </ul>
        );
    }
}