import {withRouter} from 'next/router'
import App from '../components/App.js'

const Page = withRouter((props) => (
    <App>
       <h1>{props.router.query.title}</h1>
       <p>This is the blog post content.</p>
    </App>
))

export default Page