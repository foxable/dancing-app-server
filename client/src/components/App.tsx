import * as React from "react";
import { Hero, HeroFooter, Section, Container } from "bloomer";

import { DataService, IDanceType, IDance, IFigure } from "../DataService";

import HeaderNav from "./HeaderNav";
import Select from "./Select";
import Figure from "./Figure";

interface IAppProps
{
    service: DataService;
}

interface IAppState
{
    currentDanceType?: string;
    currentDance?: string;

    danceTypes: IDanceType[];
    dances: IDance[];
    figures: IFigure[];
}

export default class App extends React.Component<IAppProps, IAppState>
{
    public constructor(props: IAppProps)
    {
        super(props);
        this.state = {
            danceTypes: [],
            dances: [],
            figures: []
        };

        this.handleDanceTypeChange = this.handleDanceTypeChange.bind(this);
        this.handleDanceChange = this.handleDanceChange.bind(this);
    }

    public componentDidMount(): void
    {
        this.fetchDanceTypes();
    }

    private async fetchDanceTypes(): Promise<void>
    {
        const danceTypes = await this.props.service.fetchDanceTypes();
        
        if (danceTypes.length === 0)
            return;

        const currentDanceType = danceTypes[0].id;
        this.setState({ ...this.state, currentDanceType, danceTypes });
        this.fetchDances(currentDanceType);  
    }

    private async fetchDances(danceTypeId: string): Promise<void>
    {
        const dances = await this.props.service.fetchDances(danceTypeId);

        if (dances.length === 0)
            return;

        const currentDance = dances[0].id;
        this.setState({ ...this.state, currentDance, dances });
        this.fetchFigures(currentDance);
    }

    private async fetchFigures(danceId: string): Promise<void>
    {
        const figures = await this.props.service.fetchFigures(danceId);

        this.setState({ ...this.state, figures });
    }


    private handleDanceTypeChange(event: React.ChangeEvent<HTMLSelectElement>): void
    {
        const currentDanceType = event.target.value;
        this.setState({ ...this.state, currentDanceType });
        this.fetchDances(currentDanceType);
    }

    private handleDanceChange(event: React.ChangeEvent<HTMLSelectElement>): void
    {
        const currentDance = event.target.value;
        this.setState({ ...this.state, currentDance });
        this.fetchFigures(currentDance);
    }

    public render(): JSX.Element
    {
        return (
            <>
                <Hero isColor="dark" isSize="small">
                    <HeroFooter style={{ marginTop: "1rem" }}>
                        <HeaderNav/>
                    </HeroFooter>
                </Hero>
                <Section>
                    <Container>
                        <Select
                            value={this.state.currentDanceType}
                            onChange={this.handleDanceTypeChange}
                            options={this.state.danceTypes}/>
                        <Select
                            value={this.state.currentDance}
                            onChange={this.handleDanceChange}
                            options={this.state.dances}/>
                        {this.state.figures.map(_ => <Figure key={_.id} data={_}/>)}
                    </Container>
                </Section>          
            </>            
        );
    }
}