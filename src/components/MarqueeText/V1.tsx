
import styles from "./V1.module.css";

export default function MarqueeText() {
    return (
        <div className={styles.marqueeContainer}>
            <span className={styles.marqueeText1}>Add some marquee text, doesn't matter what</span>
            <span className={styles.marqueeText2}>Add some marquee text, doesn't matter what</span>
        </div>
    );
}
