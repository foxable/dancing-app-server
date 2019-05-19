import * as React from "react";
import { Container, Tabs, TabList, Tab, TabLink } from "bloomer";

const HeaderNav = () => (
    <Tabs isBoxed>
        <Container>
            <TabList>
                <Tab isActive><TabLink>Tanzfiguren</TabLink></Tab>
            </TabList>
        </Container>
    </Tabs>
);

export default HeaderNav;