import Background from "./Components/backgroundHeader";
import JobContainer from "./Components/JobContainer";
import { useEffect, useState } from "react";
import FilterDiv from "./Components/FilterDiv";
import styles from "./Components/jobs.module.css";
import dataItems from "./Data/data.json"
function App() {
  const [listings, setListings] = useState([])
  const [filter, setFilter] = useState([])
  const [showDiv, setShowDiv] = useState(false)
  useEffect(() => {
    if (filter.length === 0) {
      setListings(dataItems)
      setShowDiv(false)
    }
  },[filter])
  const filterListings = (filter_by = '') => {
    if (!filter.includes(filter_by) && filter_by !== '') {
      setShowDiv(true)
      setFilter([...filter, filter_by])
      setListings(listings.filter(item => [...item.languages, ...item.tools, item.role, item.level].includes(filter_by)))
    }
  }
  const filterUnlisting = (filterIndex) => {
    const filters = [...filter]
    filters.splice(filterIndex, 1)
    setFilter(filters)
  }
  const clearFilter = () => {
    setShowDiv(false)
    const deleteAll = [...filter]
    deleteAll.splice(0, deleteAll.length)
    setFilter(deleteAll)
  }

  return (
    <>
      <Background />
      {showDiv ? (<div className={styles.row}>
        {filter.map((item, index) => <FilterDiv prop={() => filterUnlisting(index)} items={item} key={item.id}/>)}
        <div className={styles.clear} onClick={clearFilter}>Clear</div>
      </div>) : null}
      {listings.map(item => <JobContainer listing={item} key={item.id} filtering={filterListings} />)}
    </>  
  );
}

export default App;
