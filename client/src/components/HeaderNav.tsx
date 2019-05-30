import * as React from "react";
import { Tabs, TabList, Tab, TabLink } from "bloomer";

import { Container } from "./bulma";

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