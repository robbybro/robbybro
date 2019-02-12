import * as React from 'react';

const projects = [
    {
        title: 'Abalone Yoga',
        content: {
            body: [
                <p>
                    A{' '}
                    <a href="http://www.jennamark.yoga/">
                        yoga marketing website
                    </a>{' '}
                    for Jenna Mark written in TypeScript and React and
                    leveraging Github, DigitalOcean, and Docker Cloud for quick
                    development and continuous integration.
                </p>,
            ],
            image: {
                src: require('../img/projects/abaloneyoga.png'),
                alt: 'Abalone Yoga Website',
                href: 'http://www.jennamark.yoga/',
            },
        },
    },
    {
        title: 'TypeScript Webpack Node Docker Starter',
        content: {
            body: [
                <p>
                    A{' '}
                    <a href="https://github.com/robbybro/typescript-webpack-node-docker-starter">
                        boilerplate app
                    </a>{' '}
                    written in TypeScript and React, built with Webpack, and
                    deployed with Docker.{' '}
                </p>,
            ],
            image: {
                src: require('../img/projects/docker.png'),
                alt: 'Docker Logo',
                href:
                    'https://github.com/robbybro/typescript-webpack-node-docker-starter',
            },
        },
    },
    {
        title: 'Instagram Node Plugin',
        content: {
            body: [
                <p>
                    A{' '}
                    <a href="https://github.com/robbybro/insta-photos">
                        NodeJs Plugin for the Instagram API
                    </a>{' '}
                    that makes getting user photos a breeze.{' '}
                    <a href="https://www.npmjs.com/package/insta-photos">
                        Get it on NPM
                    </a>.
                </p>,
            ],
            image: {
                src: require('../img/projects/insta.png'),
                alt: 'Instagram Node Plugin',
                href: 'https://github.com/robbybro/insta-photos',
            },
        },
    },
    {
        title: 'Google Calendar Node Plugin',
        content: {
            body: [
                <p>
                    A{' '}
                    <a href="https://github.com/robbybro/gcal-events">
                        NodeJs Plugin for the Google Calendar API
                    </a>{' '}
                    that makes getting calendar events a breeze.{' '}
                    <a href="https://www.npmjs.com/package/gcal-get-events">
                        Get it on NPM
                    </a>.
                </p>,
            ],
            image: {
                src: require('../img/projects/gcal.png'),
                alt: 'Google Calendar Node Plugin',
                href: 'https://github.com/robbybro/gcal-events',
            },
        },
    },
    {
        title: 'The Flow Network',
        content: {
            body: [
                <p>
                    A hardware hackathon project at{' '}
                    <a href="https://www.extrahop.com/">ExtraHop Networks</a>{' '}
                    that combines the ExtraHop platform with{' '}
                    <a href="https://kegbot.org/">Kegbot</a> to track keg levels
                    and the flow of beer in real time using network data.
                </p>,
            ],
            image: {
                src: require('../img/projects/flownetwork.jpg'),
                alt: 'The Flow Network team',
                href: 'https://kegbot.org/',
            },
        },
    },
];

export default projects;
