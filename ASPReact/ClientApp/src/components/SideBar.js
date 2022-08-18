import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavLink } from 'reactstrap';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './SideBar.css';
import { Home } from './Home';
import { FetchData } from './FetchData';
import { Counter } from './Counter';



export class SideBar extends Component {
    static displayName = SideBar.name;

    render() {
        return (
           
                        <SideNav id="sidenav"
                            onSelect={(selected) => {
                                
                                }
                            }
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="">
                                <NavItem eventKey="">
                                    <NavIcon>
                                        <a href="/">
                                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                            </a>
                                    </NavIcon>
                                    <NavText>
                                        Home
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="counter">
                                    
                                    <NavIcon>
                                        <a href="/counter">
                                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                                            </a>
                                        </NavIcon>
                                        
                                    <NavText>
                                        Counter
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="fetchdata">

                                    <NavIcon>
                                        <a href="/fetch-data">
                                            <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em' }} />
                                        </a>
                                    </NavIcon>

                                    <NavText>
                                        Fetch Data
                                    </NavText>
                                </NavItem>
                                <NavItem eventKey="contactus">

                                    <NavIcon>
                                        <a href="/contact-us">
                                            <i className="fa fa-fw fa-solid fa-envelope" style={{ fontSize: '1.75em' }} />
                                        </a>
                                    </NavIcon>

                                    <NavText>
                                        Contact Us
                                    </NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
                     
        );
    }
}

//<SideNav
//    onSelect={(selected) => {
//        // Add your code here
//    }}
//>
//    <SideNav.Toggle />
//    <SideNav.Nav defaultSelected="home">
//        <NavItem eventKey="home">
//            <NavIcon>
//                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
//            </NavIcon>
//            <NavText>
//                Home
//            </NavText>
//        </NavItem>
//        <NavItem eventKey="charts">
//            <NavIcon>
//                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
//            </NavIcon>
//            <NavText>
//                Charts
//            </NavText>
//            <NavItem eventKey="charts/linechart">
//                <NavText>
//                    Line Chart
//                </NavText>
//            </NavItem>
//            <NavItem eventKey="charts/barchart">
//                <NavText>
//                    Bar Chart
//                </NavText>
//            </NavItem>
//        </NavItem>
//    </SideNav.Nav>
//</SideNav>

  