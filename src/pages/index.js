import React from "react"
import { Link } from "gatsby"
import * as styles from "./index.module.css";

export default () => (
    <div>
        <h1 className={styles.test}>This is the index page</h1>
        <div>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </div>
        <p>
            Lorem ipsum
        </p>
    </div>
)