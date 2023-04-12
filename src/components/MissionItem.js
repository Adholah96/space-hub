import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Missions.css';

function MissionItem({ mission }) {
  return (
    <tr>
      <td className="missionTitle">{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td className="memberCell"><button className="memberBtn" type="button">not a member</button></td>
      <td className="missionCell"><button className="missionBtn" type="button">join mission</button></td>
    </tr>
  );
}

MissionItem.propTypes = {
  mission: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MissionItem;
