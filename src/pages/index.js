import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
            <Image/>
        </div>
        <form netlify>
            <div>
                <label>Name</label>
                <input name="name"/>
            </div>
            <div>
                <label>Email</label>
                <input name="email"/>
            </div>
            <div>
                <label>Message</label>
                <textarea name="message"></textarea>
            </div>
        </form>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export default IndexPage
