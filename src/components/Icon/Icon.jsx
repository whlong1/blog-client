import News from '../../assets/icons/news.svg'
import Music from '../../assets/icons/music.svg'
import Games from '../../assets/icons/games.svg'
import Movies from '../../assets/icons/movies.svg'
import Sports from '../../assets/icons/sports.svg'
import Televison from '../../assets/icons/television.svg'

const Icon = ({ category }) => {
  const icons = {
    News: News,
    Music: Music,
    Games: Games,
    Movies: Movies,
    Sports: Sports,
    Television: Televison,
  }
  return <img src={icons[category]} alt={`A ${category} icon.`} />
}

export default Icon