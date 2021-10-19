import { useCallback } from 'react'
import './styles.css'
import CardDetail from '../components/Card/CardDetail'
import useData from '../hooks'

const Homepage = () => {
  const {
    data,
    filter,
    setFilter,
    selected,
    setSelected,
    starred,
    selectStarred,
  } = useData()
  const onSetFilter = useCallback(
    (evt) => setFilter(evt.target.value),
    [setFilter]
  )
  const onSelected = useCallback(
    (evt) => setSelected(evt.target.value),
    [setSelected]
  )
  return (
    <div className="container">
      <div className="top-section">
        {/* <div className="input"> */}
        <input
          value={filter}
          onChange={onSetFilter}
          placeholder="Search by name"
          type="text"
        />
        {/* </div> */}

        <select value={selected} onChange={onSelected}>
          <option value="animal">Animals</option>
          <option value="product">Products</option>
          <option value="company">Companies</option>
        </select>

        <div className="stared">STARRED : {starred.size}</div>
      </div>
      <div className="list">
        {data.map((item) => (
          <CardDetail
            key={item.id}
            {...item}
            starred={starred.has(item.name)}
            onStarred={selectStarred}
          />
        ))}
      </div>
    </div>
  )
}

export default Homepage
