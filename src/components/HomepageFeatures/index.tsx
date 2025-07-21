import type { ReactNode } from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Logo from '@site/static/img/logo.svg'; // 直接引入 SVG

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container text--center">
        <Logo className={styles.featureSvg} role="img" />
        <Heading as="h1" style={{ marginTop: '1.5rem' }}>
          即使迷茫，也要前进！
        </Heading>
      </div>
    </section>
  );
}
