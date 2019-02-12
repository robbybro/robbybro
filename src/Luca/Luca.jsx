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

const TIME_INTERVAL = 3000;

export default class Luca extends React.Component {
    interval;

    constructor(props) {
        super(props);
        this.state = {
            prefix: 'lu',
            suffix: 'ca',
            colorIndex: 0,
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
                <h1>Sh*t I call my dog</h1>
                <div className="name">
                    <Fade top opposite when={this.state.show}>
                        <h1>{this.state.prefix}</h1>
                    </Fade>
                    <Fade bottom opposite when={this.state.show}>
                        <h1>{this.state.suffix}</h1>
                    </Fade>
                </div>
                <img src={PHOTO_COLORS[this.state.colorIndex]} alt='dog'/>
            </div>
        );
    }

    _changeName = () => {
        const prefixIndex = Math.floor(Math.random() * NORMAL_PREFIX.length);
        const suffixIndex = Math.floor(Math.random() * NORMAL_SUFFIX.length);

        const prefix = NORMAL_PREFIX[prefixIndex];
        const suffix = NORMAL_SUFFIX[suffixIndex];

        this.setState(state => {
            return {
                prefix,
                suffix,
                colorIndex: (state.colorIndex + 1) % PHOTO_COLORS.length,
                show: !state.show
            };
        });
    };
}

const NORMAL_PREFIX = ['sp', 'sc', 'sm', 'sp', 'sn'];

const NORMAL_SUFFIX = ['oon', 'oop', 'ooch', 'oot', 'ool'];

const SPECIAL_NAME = [
    'naked armpits',
    'the goodest boi',
    'spotty chest',
    'good boi',
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
