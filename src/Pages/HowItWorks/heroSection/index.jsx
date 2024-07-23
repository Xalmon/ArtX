import React from "react";
import styles from "./index.module.css";
import artworkImage from "../../../assests/images/Queen-Mother.jpg"; 
import img from "../../../assests/images/smallCloud.webp"; 
import img1 from "../../../assests/images/smallWallet.webp"; 


function Hero() {
  return (
    <div className={styles.body}>
      <h1>User Requirements Document: Digital Art Gallery Platform</h1>

      <section>
        <h2>User Profiles:</h2>
        <ul>
          <li>Artist</li>
          <li>Collector/Buyer</li>
          <li>Admin</li>
          <li>System</li>
        </ul>
        <p>
          <strong>User Registration:</strong> Users must provide a valid email
          address and create a password for registration. The system should
          include a CAPTCHA verification process to prevent automated sign-ups.
        </p>
      </section>

      <section>
        <h2>Artwork Submission and Display:</h2>
        <p>
          <strong>Artwork Upload:</strong> Artists can upload images or
          multimedia files of their artworks.
        </p>
        <img src={artworkImage} alt="Artwork" className={styles.artwork} />
        <p>
          <strong>Artwork Information:</strong> Artists should provide details,
          including title, description, medium, dimensions, cultural
          significance, and proof of intellectual property ownership or due
          permission from the original owner before final submission.<br/>
          The editing feature should allow changes to be made before approval.<br/>
        </p>
      </section>

      <section>
        <h2>Artwork Discovery and Collection:</h2>
        <p>
          <strong>Search and Filters:</strong> Artists can upload images or
          multimedia files of their artworks.
        </p>
        <img src={img} alt="Info" className={styles.artwork} />
        <p>
          <strong>Artwork Information:</strong> Users can search based on artist name, medium, cultural theme, and apply filters.<br/>
            The search algorithm should provide relevant and accurate results.<br/>
            Recommendations:<br/>
        </p>
      </section>

      <section>
        <h2>E-commerce and Transactions:</h2>
        <p>
          <strong>Purchase Process:</strong> Artists can upload images or
          multimedia files of their artworks.
        </p>vdhyt
        <img src={img1} alt="Payment" className={styles.artwork} />
        <p>
          <strong>Artwork Information:</strong>  Buyers can add artworks to a cart and proceed to secure checkout.<br/>
                 The transaction process should include payment options such as credit cards,<br/> digital wallets, Ussd, Direct bank transfers and other secure methods.<br/>
                 Transaction Security The platform will use SSL encryption for secure transactions.<br/>
                 Integration with reputable payment gateways to ensure financial data security.<br/>
        </p>
      </section>
    </div>
  );
}

export default Hero;
