import { useRouter } from 'next/router'
import Layout from '../../components/views/BaseView'

const Post = () => {
    const router = useRouter()
    const { post } = router.query
    return (
        <Layout pageTitle={`記事id` + post}>
            <p className="m-10">
                Post: {post}
            </p>
        </Layout>
    )
}

export default Post