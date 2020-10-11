import React, { Component } from 'react';
import Helmet from 'react-helmet';

export class HelmetTag extends Component {
  render() {
    const { title, description, image, keywords } = this.props;
    return (
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: description,
          },
          {
            name: 'keywords',
            content: keywords,
          },
          {
            name: 'og:title',
            content: title,
          },
          {
            name: 'og:description',
            content: description,
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:description',
            content: description,
          },
          {
            name: 'twitter:site',
            contant: '@anmolsukki',
          },
          {
            name: 'twitter:card',
            contant: 'summary',
          },
          {
            name: 'og:site_name',
            contant: 'Zarves',
          },
          {
            name: 'og:image',
            content: image,
          },
        ]}
      />
    );
  }
}
