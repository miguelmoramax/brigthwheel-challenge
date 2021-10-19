import { useCallback, useState, useEffect, useMemo } from 'react'

const useData = () => {
  const [filter, setFilter] = useState('')
  const [allData, setAllData] = useState([])
  const [selected, setSelected] = useState('animal')
  const [starred, setStarred] = useState(new Set());

  useEffect(() => {
    fetch(`http://localhost:3001/search?type=${selected}&_page=1&_limit=10}`)
      .then((resp) => resp.json())
      .then((allData) => setAllData(allData))
  }, [selected])

  useCallback((item, payload) => {
    fetch(`http://localhost:3001/search/${item.id}`, {
      method: 'put',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((starred) => setStarred(starred))
  }, [])

  
  const selectStarred = useCallback((name) => {
    setStarred((currentSet) => {
      const newSet = new Set(currentSet);
      if (currentSet.has(name)) {
        newSet.delete(name);
      } else {
        newSet.add(name);
      }
      return newSet;
    });
  }, []);

  const data = useMemo(() => {
    const lcFilter = filter.toLowerCase()
    return allData
      .filter((el) => el.name.toLowerCase().includes(lcFilter))
      .slice(0, 10)
  }, [filter, allData])

  return {
    data,
    filter,
    setFilter,
    selected,
    setSelected,
    starred,
    setStarred,
    selectStarred
  }
}

export default useData
