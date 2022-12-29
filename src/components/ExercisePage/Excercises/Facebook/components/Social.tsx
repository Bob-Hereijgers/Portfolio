import styles from "../App.module.css";

export interface SocialProps {
    like: string,
    comment: string,
    share: string
}

const Social = (props: SocialProps) => {
    return(
    <div className={styles.social}>
    <div className={styles.social_content}></div>
    <div className={styles.social_buttons}>
      <span>
        <i className="fa fa-thumbs-up"></i>{props.like}
      </span>
      <span>
        <i className="fa fa-comment"></i>{props.comment}
      </span>
      <span>
        <i className="fa fa-share"></i>{props.share}
      </span>
    </div>
  </div>
    );
}

export default Social;