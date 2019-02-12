import './Project.scss';

import * as React from 'react';

export default class Project extends React.Component {
    render() {
        return (
            <section className="c-project">
                <h1 className="c-project__title">{this.props.title}</h1>
                <div className="c-project__content">
                    <a
                        className="c-project__image"
                        href={this.props.content.image.href}
                    >
                        <img
                            src={this.props.content.image.src}
                            alt={this.props.content.image.alt}
                        />
                    </a>
                    <p className="c-project__description">
                        {this.props.content.body}
                    </p>
                </div>
            </section>
        );
    }
}
