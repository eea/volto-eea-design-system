import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Redirect } from '@docusaurus/router';

export default function Home() {
  return <Redirect to={useBaseUrl('/docs/intro')} />;
}

// import clsx from 'clsx';
// import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import styles from './index.module.css';
// import HomepageFeatures from '../components/HomepageFeatures';
