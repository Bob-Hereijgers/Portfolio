import styles from "../App.module.css";
import Reference from "./Reference"

interface ContentProps {
    website: string,
    text: string
  }

  
  
const Content = (props: ContentProps) => {
    return(
      <>
      <div className={styles.content}>
      <p>
        {props.text}
        <a href={props.website}>{props.website}</a> 
      </p>
    </div>
  
  <Reference 
  title="A quick and simple image placeholder service. | PlaceCage" 
  subtitle="How does it work? Just put your image size after our URL and you'll get a placeholder." 
  image="https://www.placecage.com/c/476/250"   
  website="placecage.com"/>
  </>
    );
    }

    export default Content;