import styles from "../App.module.css";


export interface ReferenceProps {
    title: string,
    image: string,
    subtitle: string,
    website: string
  }


  const Reference = (props: ReferenceProps) => {
    return(
          <div className={styles.reference}>
            <img className={styles.reference_thumb} src={props.image} alt="main"/>
            <div className={styles.reference_content}>
              <div className={styles.reference_title}>
                {props.title}
              </div>
              <div className={styles.reference_subtitle}>
                {props.subtitle}
              </div>
              <div className={styles.reference_font}>{props.website}</div>
            </div>
          </div>
    );
  }

  export default Reference;