import React from "react"
import { Link } from "gatsby"

export default () => (
    <div>
        <h1>This is the about page</h1>
        <div>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </div>
        <p>
            Lorem ipsum about
        </p>
    </div>
)
