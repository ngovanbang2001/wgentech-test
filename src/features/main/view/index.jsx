import ContentCard from '../components/content-card'
import ContentHeader from '../components/content-header'
import useMedia from '../hook/useMedia'
import '../styles/main.css'

const Home = () => {
  const { mediaData } = useMedia()
  return (
    <div className='pt-24'>
      <ContentHeader />
      <ContentCard mediaData={mediaData}/>
    </div>
  )
}
export default Home
