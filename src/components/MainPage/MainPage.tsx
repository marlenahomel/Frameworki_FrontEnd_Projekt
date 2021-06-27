import React,{FC} from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
}   from "react-router-dom";

import {TopBar} from '../TopBar/TopBar';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import {Publications} from '../Publications/Publications';
import {Workspaces} from '../Workspaces/Workspaces';
import {ResumeYourWork} from '../ResumeYourWork/ResumeYourWork';
import {Entities} from '../Entities/Entities';
import {Profile} from '../Profile/Profile';
import {Mock} from '../Mock/Mock';

const Wrapper = styled.div``

const Content = styled.div`
    max-width:1200px;
    margin: 0 auto;
    display:flex;

`;
const RightSide = styled.div`
`;

function MainPage(){
    return(
        <Router>
            <Wrapper>
                <TopBar/>
                <Content>
                    <LeftMenu/>
                        <RightSide>
                            <Switch>
                                <Route path="/entities" exact>
                                    <Entities/>
                                </Route>
                                <Route path="/profile" exact>
                                    <Profile/>
                                </Route>
                                <Route path="/workspaces" exact>
                                        <Mock/>
                                </Route>
                                <Route path="/mock" exact>
                                    <Mock/>
                                </Route>
                                <Route path="/" exact>
                                    <Publications/>
                                    <Workspaces/>
                                    <ResumeYourWork/>
                                </Route>
                            </Switch>
                        </RightSide>
                </Content>
            </Wrapper>
        </Router>
    )

}

export default MainPage