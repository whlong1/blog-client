import News from '../../assets/icons/News.svg'
import Music from '../../assets/icons/Music.svg'
import Games from '../../assets/icons/Games.svg'
import Movies from '../../assets/icons/Movies.svg'
import Sports from '../../assets/icons/Sports.svg'
import Televison from '../../assets/icons/Television.svg'

const Icon = ({ category }) => {
  const icons = {
    News: News,
    Music: Music,
    Games: Games,
    Movies: Movies,
    Sports: Sports,
    Televison: Televison,
  }
  return <img src={icons[category]} alt="" />
}

export default Icon