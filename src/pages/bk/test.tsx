import type { NextPage } from "next";
import Layout from '../components/views/BaseView'

const Test: NextPage = () => {
    return (
        <Layout pageTitle={'testページ'}>
            <h1>test-page</h1>
        </Layout>
    )
}

export default Test