import styles from "./jobs.module.css"

export default function Jobs(props) {
    function handleFilter(skill) {
        props.filter_f(skill)
    }
    const Skills = ({skill}) => (<div className={styles.role} onClick={() => handleFilter(skill)}>
        {skill}
    </div>)
    
    return (
        <div className={styles.row}>
            <div>
                <img src={props.logo} alt= '' />
            </div>
            <div className={styles.col1}>
                <div className={styles.company}>{props.company}
                    <div className={styles.col2}>
                        <div>
                            {props.new === false ? null : (
                                <div className={styles.new}>{props.new}</div>
                            )}
                        </div>
                        <div>
                            {props.featured === false ? null : (
                                <div className={styles.featured}>{props.featured}</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.position}>{props.position}
                </div>
                <div className={styles.col3}>
                    <div>{props.postedAt}</div>
                    <div>. {props.contract}</div>
                    <div>. {props.location}</div>
                </div>
            </div>
            <div className={styles.col4}>
                <div className={styles.role} onClick={() => handleFilter(props.role)}>{props.role}
                </div>
                <div className={styles.role} onClick={() => handleFilter(props.level)}>{props.level}
                </div>
                <div className={styles.col5}>
                    {[...props.languages, ...props.tools].map(skill => <Skills skill={skill}/> )}
                </div>
            </div>
        </div>
        
    )
}