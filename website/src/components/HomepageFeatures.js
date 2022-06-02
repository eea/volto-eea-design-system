import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Web developer',
    link: '/volto-eea-design-system/docs/intro',
    Svg: require('../../static/img/undraw_proud_coder_re_exuy.svg').default,
    description: <>Design system for web developers.</>,
  },
  {
    title: 'Web designer',
    link: '/volto-eea-design-system/docs/intro',
    Svg: require('../../static/img/undraw_static_website_re_x70h.svg').default,
    description: <>Design system for web designers.</>,
  },
  {
    title: 'Web content creator',
    Svg: require('../../static/img/undraw_add_post_re_174w.svg').default,
    description: <>Tips and tricks for writing for the web.</>,
  },
  {
    title: 'Publication writer',
    Svg: require('../../static/img/undraw_education_f8ru.svg').default,
    description: <>Writing manual for publications.</>,
  },
  {
    title: 'Publication designer',
    Svg: require('../../static/img/undraw_online_articles_re_yrkj.svg').default,
    description: <>Design system for publications.</>,
  },
  {
    title: 'Data scientist',
    Svg: require('../../static/img/undraw_all_the_data_re_hh4w.svg').default,
    description: <>Design system for data scientists.</>,
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}><Svg className={styles.featureSvg} alt={title} /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center">I am a...</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
