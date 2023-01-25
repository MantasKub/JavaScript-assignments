import { useEffect, useState } from 'react';

const PasswordsList = ({ renew }) => {

  const [resList, SetResList] = useState([]);

  useEffect(() => {
    const localItems = localStorage.getItem('res');
    const array = JSON.parse(localStorage.getItem('res'));
    if (localItems) {
      SetResList(array.map((value, index) => {
        return (<li key={index} className="">{value}</li>)
      }))
    } else {
      SetResList(<div>There is no generated password yet</div>)
    }
  }, [renew]);

  return (
    <div>
      <ul className="list-group">
        {resList}
      </ul>
    </div>
  )
}


export default PasswordsList;