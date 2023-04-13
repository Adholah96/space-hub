import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Missions.css';
import { getMissions } from 'redux/missions/missionsSlice';
import MissionItem from './MissionItem';

function Missions() {
  const dispatch = useDispatch();
  const { missions, isLoading, error } = useSelector((store) => store.missions);
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        <h1>{error}</h1>
      </div>
    );
  }
  return (
    <main>
      <table>
        <tbody>
          <tr>
            <th id="headerOne">mission</th>
            <th>discription</th>
            <th id="headerThree">status</th>
            <th id="headerFour">
              <span id="empty">empty</span>
            </th>
          </tr>
        </tbody>
        {missions.map((item) => (
          <MissionItem key={item.mission_id} mission={item} />
        ))}
      </table>
    </main>
  );
}

export default Missions;
