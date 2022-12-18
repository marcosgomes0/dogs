import Feed from "./feed/Feed"
import Head from "./interface/Head"

const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title='Home'/>
      <Feed/>
    </section>
  )
}

export default Home