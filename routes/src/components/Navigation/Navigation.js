import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {

    toggleAccordion(event){
        event.preventDefault();
        let el = event.currentTarget;
        let panel = el.nextElementSibling;
        let scrollHeight = null;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            scrollHeight = panel.scrollHeight;
            scrollHeight = (scrollHeight < 50)? 100 : scrollHeight;
            panel.style.maxHeight = scrollHeight + "px";
        }
    }

    getRoute(obj, route) {
        let strRoute = route;

        if (obj.parent === 0 && obj.type_label !== "Custom Link") {
            strRoute = '/' + obj.type_label;
        }
        else if (obj.type_label === "Custom Link") {
            strRoute = '';
        } else {
            if (strRoute.includes(obj.type_label)) {
                strRoute = strRoute + '/' + obj.object_slug;
            } else {
                strRoute = strRoute + '/' + obj.type_label + '/' + obj.object_slug;
            }
        }

        return strRoute;

    }

    buildRoutes(item, index, route) {
        let strRoute = this.getRoute(item, route);
        strRoute = strRoute.replace(/\s/g, '');

        if (strRoute === '/Home') {
            strRoute = '/';
        }

        if (item.type_label === "Custom Link" && item.url !== "#") {
            return (
                <li key={index}><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></li>
            )
        } else if (item.children) {
            let link = item.children.map((innerItem, innerIndex) => {
                return this.buildRoutes(innerItem, innerIndex, strRoute)
            });
            return (
                <li key={index}>
                    <a href="#panel" className="has-children" onClick={(event) => this.toggleAccordion(event)}>{item.title}<span className="submenu-indicator"><i className="fas fa-chevron-down"></i></span></a>
                    <ul className="accordion-panel">
                        {link}
                    </ul>

                </li>
            )
        } else {
            return (
                <li key={index}><Link to={strRoute} parent={item.parent}>{item.title}</Link></li>
            )
        }
    }

    siteNavigation() {
        let html = this.props.items.map((item, index) => {
            return this.buildRoutes(item, index, "")
        });

        return (
            <ul className="main-menu">
                {html}
            </ul>
        )
    }

    componentDidMount(){
        console.log('Navigation');
    }

    render() {
        return (
            <nav>
                {this.siteNavigation()}
            </nav>
        );
    }
}

export default Navigation;