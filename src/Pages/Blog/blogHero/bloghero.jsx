import React from "react";
import styles from "./bloghero.module.css";
import { eventsData } from "./eventsData";

function Blog() {
  return (
    <div className={styles.blogBody}>
      <div>
      <h1 className={styles.welcome}>Welcome to ArtXpress Blog.</h1>
        <p>
          Navigate the exciting realm of Digital Art with latest trends, market
          analysis, artist stories and expert insights.
        </p>
        <div className={styles.selections}>
          <div>Guide</div>
          <hr />
          <div>Works</div>
          <hr />
          <div>Artist</div>
          <hr />
          <div>Trends</div>
          <hr />
          <div>Technology</div>
        </div>
      </div>

      <div className={styles.images}>
        {eventsData.map((event, index) => (
          <div className={styles.events} key={index}>
            <h1>{event.title}</h1>
              <img src={event.image} 
              alt={event.title} style={{ maxWidth: "20%", height: "0.9%" }}/>
            <p className={styles.eventDetails}>
              <span className={styles.bold}>Description:</span> {event.description}
              <br />
              <span className={styles.bold}>Date:</span> {event.date}
              <br />
              <span className={styles.bold}>Location:</span> {event.location}
              <br />
              <span className={styles.bold}>Highlights:</span> {event.highlights}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
