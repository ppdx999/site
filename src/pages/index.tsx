import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function Card({title, link}) {
  return (
    <div className="card">
      <Link to={link} className="card-body padding--lg">
        <h3 className={clsx("card-title", styles.cardTitle)}>{title}</h3>
      </Link>
    </div>
  );
}

const items = [
  {title: 'Works', link: '/docs/intro'},
  {title: 'Blog', link: '/blog'},
  {title: 'Coming Soon', link: '/'},
]

function HomepageMain() {
  return (
    <main>
      <section className="margin-vert--lg padding--lg">
        <div className="container">
          <div className="row">
            {items.map((props, idx) => (
              <div className="col col--4 margin-vert--md" key={idx}>
                <Card {...props} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="a software developer">
      <HomepageHeader />
      <HomepageMain />
    </Layout>
  );
}
