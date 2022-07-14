import styles from "./jobs.module.css"
export default function FilterDiv({items, prop}) {

    return (
        <span className={styles.showDiv}>
            {items}
            <div className={styles.delete} onClick={prop}>x</div>
        </span>
       
    )
}