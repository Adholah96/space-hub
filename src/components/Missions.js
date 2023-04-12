import React from 'react';
import '../styles/Missions.css';

function Missions() {
  return (
    <main>
      <table>
        <tr>
          <th id="headerOne">mission</th>
          <th>discription</th>
          <th id="headerThree">status</th>
          <th id="headerFour"><span id="empty">empty</span></th>
        </tr>
        <tr>
          <td className="missionTitle">Thaicom</td>
          <td>
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
          </td>
          <td className="memberCell"><button className="memberBtn" type="button">not a member</button></td>
          <td className="missionCell"><button className="missionBtn" type="button">join mission</button></td>
        </tr>
        <tr>
          <td className="missionTitle">Thaicom</td>
          <td>
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
          </td>
          <td className="memberCell"><button style={{ background: 'blue', fontSize: '0.4rem' }} className="memberBtn" type="button">active member</button></td>
          <td className="missionCell"><button style={{ color: 'red', borderColor: 'red', background: 'transparent' }} className="missionBtn" type="button">leave mission</button></td>
        </tr>
        <tr>
          <td className="missionTitle">Thaicom</td>
          <td>
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddd
          </td>
          <td className="memberCell"><button className="memberBtn" type="button">not a member</button></td>
          <td className="missionCell"><button className="missionBtn" type="button">join mission</button></td>
        </tr>
      </table>
    </main>
  );
}

export default Missions;
