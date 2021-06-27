import Head from 'next/head';
import styles from '../styles/Home.module.css';
import EventCard from '../components/EventCard';
import TestimonialCard from '../components/TestimonialCard';
import CommunityCard from '../components/CommunityCard';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>You Can Movement</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <h3>Hello</h3>
        <h3>Nossa Comunidade</h3>
        <div className={styles.community}>
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
          <CommunityCard />
        </div>
        <h3>Depoimentos</h3>
        <div className={styles.testmonials}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>

        <h3>Eventos</h3>
        <div className={styles.events}>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
}
