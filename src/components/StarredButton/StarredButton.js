import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const StarredButton = ({ onClick, starred }) => (
  <FontAwesomeIcon
    icon={faStar}
    onClick={onClick}
    className={`starred ${starred ? 'on' : 'off'}`}
  />
)

export default StarredButton
