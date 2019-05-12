import * as React from "react";
import { Section, Container, Hero, Field, Control, Select, HeroFooter, Tabs, TabList, Tab, TabLink } from "bloomer";

import { ApiService, IDanceType, IDance, IFigure } from "./ApiService";
import Figure from "./Figure";

interface IAppProps
{
    api: ApiService;
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
        const danceTypes = await this.props.api.fetchDanceTypes();
        
        if (danceTypes.length === 0)
            return;

        const currentDanceType = danceTypes[0].id;
        this.setState({ ...this.state, currentDanceType, danceTypes });
        this.fetchDances(currentDanceType);  
    }

    private async fetchDances(danceTypeId: string): Promise<void>
    {
        const dances = await this.props.api.fetchDances(danceTypeId);

        if (dances.length === 0)
            return;

        const currentDance = dances[0].id;
        this.setState({ ...this.state, currentDance, dances });
        this.fetchFigures(currentDance);
    }

    private async fetchFigures(danceId: string): Promise<void>
    {
        const figures = await this.props.api.fetchFigures(danceId);

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
                        <Tabs isBoxed>
                            <Container>
                                <TabList>
                                    <Tab isActive><TabLink>Tanzfiguren</TabLink></Tab>
                                </TabList>
                            </Container>
                        </Tabs>
                    </HeroFooter>
                </Hero>
                <Section>
                    <Container>
                        <Field>
                            <Control isExpanded>
                                <Select
                                    value={this.state.currentDanceType}
                                    onChange={this.handleDanceTypeChange}
                                    isFullWidth>
                                    {this.state.danceTypes.map(_ => <option key={_.id} value={_.id}>{_.name}</option>)}
                                </Select>
                            </Control>
                        </Field>
                        <Field>
                            <Control isExpanded>
                                <Select
                                    value={this.state.currentDance}
                                    onChange={this.handleDanceChange}
                                    isFullWidth>
                                    {this.state.dances.map(_ => <option key={_.id} value={_.id}>{_.name}</option>)}
                                </Select>
                            </Control>
                        </Field>
                        {this.state.figures.map(_ => <Figure data={_} key={_.id}/>)}
                    </Container>
                </Section>          
            </>            
        );
    }
}