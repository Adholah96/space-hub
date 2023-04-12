import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missionsSlice';
import '../styles/Missions.css';

function MissionItem({ mission }) {
  const dispatch = useDispatch();
  const handleJoinMission = () => {
    dispatch(joinMission(mission.mission_id));
  };
  return (
    <tr>
      <td className="missionTitle">{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td className="memberCell">
        <button
          className={mission.reserved === true ? 'activeBtn' : 'memberBtn'}
          type="button"
        >
          {mission.reserved === true ? 'active member' : 'not a member' }
        </button>
      </td>
      <td className="missionCell"><button onClick={handleJoinMission} className="missionBtn" type="button">join mission</button></td>
    </tr>
  );
}

MissionItem.propTypes = {
  mission: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MissionItem;
