import Projects from '@/components/Projects';
import styles from '@/styles/blogsprojects.module.css'

const BlogsAndProjects = () => {
    return (
        <div className={styles.blogsProjectsMain}>
           <div className={styles.workHeading}>Blogs and Projects</div>
           <Projects />
        </div>
    )
}

export default BlogsAndProjects