import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './mission.css';
import { loadMissionsData } from '../../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const adjustMarginButton = () => {
    const btns = Array.from(document.querySelectorAll('button'));
    btns.forEach((btn) => {
      const parent = btn.parentNode.parentNode;
      const h = parent.offsetHeight;
      const margin = `${0.4 * parseInt(h, 10)}`;
      const elements = parent.querySelectorAll('button');
      for (let i = 0; i < elements.length; i += 1) {
        const elem = elements[i];
        if (elem.className.includes('mission')) elem.style.margin = `${margin - 6}px 10% `;
        else elem.style.margin = `${margin}px 0`;
      }
    });
  };
  const loadAndAlignData = () => {
    dispatch(loadMissionsData());
    adjustMarginButton();
  };
  useEffect(() => loadAndAlignData());
  /* useEffect(() => dispatch(loadMissionsData()));
  useEffect(() => adjustMarginButton(), []); */
  return (
    <table style={{ borderCollapse: 'collapse', width: '90%', margin: '1.25% 5%' }}>
      <thead>
        <tr>
          <th style={{ width: '11.7%' }}>Mission</th>
          <th style={{ width: '58.8%' }}>Description</th>
          <th style={{ width: '11.7%' }}>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => {
          const {
            id, name, description, reserved,
          } = mission;
          return (
            <tr key={id} style={(reserved) ? { backgroundColor: '#fff' } : { backgroundColor: 'rgb(242, 242, 242)' }}>
              <td className="mission-name">{name}</td>
              <td className="description">{description}</td>
              <td>
                {reserved
            && (
            <button type="submit" className="member active-member"> Active Member</button>)}
                {!reserved
            && (<button type="submit" className="member not-member"> NOT A MEMBER</button>)}
              </td>
              <td>
                {!reserved
              && (<button type="submit" className="mission join-mission">Join Mission</button>)}
                { reserved
               && (<button type="submit" className="mission leave-mission">Leave Mission</button>
               )}
              </td>

            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Missions;
