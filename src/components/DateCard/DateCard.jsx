import Icon from '../../components/Icon/Icon'

const DateCard = ({ date }) => {
  return (
    <div>
      <Icon category="Calendar" />
      <h5>{date}</h5>
    </div>
  )
}

export default DateCard