import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { SiteHead } from 'components/site-head';
import { NextPage } from 'next';
import styles from 'styles/Home.module.scss';

const careerPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <SiteHead title="Karijera" />
      <Header />
      <div>Karijera TODO</div>
      <Footer />
    </div>
  );
};

export default careerPage;
