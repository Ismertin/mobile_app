import { useState } from 'react'
import Layout from '../../Layout.jsx'

function Home() {
	const [count, setCount] = useState(0)

	return <Layout bgImage={'/public/bg.jpeg'}></Layout>
}

export default Home
