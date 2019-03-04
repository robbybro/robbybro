import './Luca.scss';

import * as React from 'react';
import Fade from 'react-reveal/Fade';

const spoonBlue = require('./spoon_blue.png');
const spoonLightBlue = require('./spoon_lightblue.png');
const spoonMagenta = require('./spoon_magenta.png');
const spoonOrange = require('./spoon_orange.png');
const spoonPurple = require('./spoon_purple.png');
const spoonRed = require('./spoon_red.png');
const spoonYellow = require('./spoon_yellow.png');
const spoonLightGreen = require('./spoon_lightgreen.png');
const spoonGreen = require('./spoon_green.png');

const TIME_INTERVAL = 1000;

export default class Luca extends React.Component {
    interval;
    counter = 0;
    constructor(props) {
        super(props);
        this.state = {
            prefix: 'lu',
            suffix: 'ca',
            colorIndex: 0,
            nameIndex: 0,
            show: true,
        };
    }

    componentWillMount() {
        this.interval = setInterval(this._changeName, TIME_INTERVAL);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="container">
                <h1 className='title'>Sh*t I call my dog</h1>
                <div className="name">
                    <Fade top opposite when={this.state.show}>
                        <h1 className='prefix'>{this.state.prefix}</h1>
                    </Fade>
                    <Fade bottom opposite when={this.state.show}>
                        <h1 className='suffix'>{this.state.suffix}</h1>
                    </Fade>
                </div>
                <img src={PHOTO_COLORS[this.state.colorIndex]}alt='dog'/>
            </div>
        );
    }

    _changeName = () => {
        this.counter++;
        if (this.state.show) {
            if (this.counter % 3 === 0) {
                const chosen = NAMES[this.state.nameIndex];
                const prefix = chosen.substring(0, chosen.length / 2);
                const suffix = chosen.substring(chosen.length / 2);

                this.setState(state => {
                    return {
                        prefix,
                        suffix,
                        colorIndex: (state.colorIndex + 1) % PHOTO_COLORS.length,
                        nameIndex: (state.nameIndex + 1) % NAMES.length,
                        show: !state.show
                    };
                });
            }

        }
        else {
            this.counter = 0;
            this.setState(state => ({show: !state.show}));
        }
    };
}

const NAMES = [
    'spoon',
    'the goodest boi',
    'scoop',
    'smooch',
    'good boi',
    'spoot',
    'spoon country usa why buy a spoon anywhere else',
    'spool',
    'spotty chest',
    'spoon town',
    'naked armpits',
    'spoonflower',
    'luca'
];

const PHOTO_COLORS = [
    spoonBlue,
    spoonLightBlue,
    spoonMagenta,
    spoonOrange,
    spoonPurple,
    spoonRed,
    spoonYellow,
    spoonLightGreen,
    spoonGreen,
];


/*

spoon
scoop
smooch
spook
snoot
smooch
spool


naked armpits
the goodest boi
spotty chest
good boi
luca
spoonflower
spoon country usa why buy a spoon anywhere else
spoon town

*/
