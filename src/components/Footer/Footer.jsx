import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>
        Created by&nbsp;
        <a
          href="https://beckiemorton-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Beckie Morton's GitHub"
        >
          B.M
        </a>
        &nbsp;using&nbsp;
        <a
          href=""
          target="_blank"
          rel="noreferrer noopener"
          aria-label="https://www.exchangerate api"
        >
          Exchangerate-api
        </a>
      </p>
    </div>
  );
};
