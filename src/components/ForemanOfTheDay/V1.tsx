import { useBrickContext } from "@/providers/BrickProvider";
import styles from "./V1.module.css";

export default function ForemanOfTheDay() {
    const { bricks } = useBrickContext();
    const foremanOfTheDay = bricks.sort((a, b) => b.createdTime.getTime() - a.createdTime.getTime())[0];
    return (
        <span className={styles.foremanOfTheDay}>
            <strong>Foreman of the day:</strong>
            {foremanOfTheDay.owner.profile ? (
                <a href={foremanOfTheDay.owner.profile} rel="noopener noreferrer"><strong>@{foremanOfTheDay.owner.name}</strong></a>
            ) : (
                <span><strong>{foremanOfTheDay.owner.name}</strong></span>
            )}
        </span>
    );
}