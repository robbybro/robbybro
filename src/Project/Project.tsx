import './Project.scss';

import * as _ from 'underscore';
import * as React from 'react';

interface ProjectProps {
    title: string;
    content: {
        body: any;
        image: {
            src: string;
            href: string;
            alt: string;
        }
    }
};

export default class Project extends React.Component<ProjectProps, null> {
    render() {
        return (
            <section className='c-project'>
                <div className='c-project__content'>
                    <h1>{this.props.title}</h1>
                    {this.props.content.body}
                </div>
                    <a
                        className='c-project__image'
                        href={this.props.content.image.href}
                    >
                        <img
                            src={this.props.content.image.src}
                            alt={this.props.content.image.alt}
                        />
                    </a>
            </section>
        );
    }
}
