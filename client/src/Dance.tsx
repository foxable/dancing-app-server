import * as React from "react";
import { Table } from "bloomer";

import { ApiService, IDance, IFigure } from "./ApiService";
import Figure from "./Figure";

interface IDanceProps
{
    api: ApiService;
    data: IDance;
}

interface IDanceState
{
    showFigures: boolean;
    figures: IFigure[];
}

export default class Dance extends React.Component<IDanceProps, IDanceState>
{
    public constructor(props: IDanceProps)
    {
        super(props);
        this.toggleShowFigures = this.toggleShowFigures.bind(this);
        this.state = {
            showFigures: false,
            figures: []
        };
    }

    public render(): JSX.Element
    {
        return (
            <>
                <span onClick={this.toggleShowFigures}>{this.props.data.name}</span>
                {this.state.showFigures ?
                    <Table isBordered isStriped isNarrow>
                        <tbody>
                            {this.state.figures.map(_ => <Figure data={_} key={_.id}/>)}
                        </tbody>                        
                    </Table> : ""}
            </>
        );
    }

    private toggleShowFigures(): void
    {
        if (this.state.figures.length === 0)
        {
            this.fetchFigures();
            return;
        }

        this.setState({ ...this.state, showFigures: !this.state.showFigures });
    }

    public fetchFigures(): void
    {
        this.props.api
            .fetchFigures(this.props.data.abbr)
            .then(figures => this.setState({ ...this.state, showFigures: true, figures }));
    }
}