import * as React from "react";
import { Section, Container, Hero, HeroBody, Title } from "bloomer";

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
            <>
                <Hero isColor="info" isSize="small">
                    <HeroBody>
                        <Container>
                            <Title>Tanzfiguren</Title>
                        </Container>
                    </HeroBody>
                </Hero>
                <Section>
                    <Container>
                        <ul>
                            {this.state.dances.map(_ => <li key={_.abbr}><Dance data={_} api={this.props.api}/></li>)}
                        </ul>
                    </Container>                    
                </Section>                
            </>            
        );
    }
}