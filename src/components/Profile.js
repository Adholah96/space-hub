import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Profile.css';

function Profile() {
  const { missions } = useSelector((store) => store.missions);
  const filteredMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <main>
      <div className="missions">
        <h3>my missions</h3>
        <ul>
          { filteredMissions.map((mission) => {
            const id = mission.mission_id;
            const name = mission.mission_name;
            return <li key={id}>{name}</li>;
          }) }
        </ul>
      </div>
    </main>
  );
}

export default Profile;
