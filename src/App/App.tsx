import './App.scss';

import * as _ from 'underscore';
import * as React from 'react';

import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Project from '../Project/Project';
import contactItems, { ContactItem } from '../data/contact';
import projects from '../data/projects';

const { SpeedDial, BubbleList, BubbleListItem } = require('react-speed-dial');
const logo = require('../../img/rb_logo.svg');

export default class App extends React.Component<null, null> {
    render() {

        const listElements = _.map(contactItems, (item, i)=> {
            return (
                <BubbleListItem
                    key={i}
                    href={item.href}
                    primaryText={item.username}
                    rightAvatar={
                        <Avatar
                            backgroundColor={item.backgroundColor}
                            icon={
                                <FontIcon className={`fa ${item.iconClass}`} />
                            }
                        />
                    }
                />
            )
        });

        const projectElements = _.map(projects, (item, i) => {
                return (
                    <Project {...item} key={i} />
                );
        });

        return (
            <MuiThemeProvider>
                <div>
                    <header>
                        <img className='c-logo' src={logo} alt='Robby Brosman logo' />
                    </header>
                    <div className='c-blurb'>
                        <p>Hi, my name is Robby. I <a href='https://www.brewersfriend.com/homebrew/brewer/88086/robbybro'>brew a lot of beer</a> and <a href='https://github.com/robbybro/'>write a lot of code</a>.</p>
                        <p>Check out some of my work below.</p>
                    </div>
                    <div className='c-projects'>
                        {projectElements}
                    </div>
                    <SpeedDial>
                        <BubbleList>
                            {listElements}
                        </BubbleList>
                    </SpeedDial>
                    <footer>&copy; {new Date().getFullYear()} Robby Brosman</footer>
                </div>
            </MuiThemeProvider>
        );
    }
}