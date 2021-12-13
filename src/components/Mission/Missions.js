import React from 'react';
import './mission.css';

const Missions = () => {
  const missions = [{
    id: 'tra1',
    missionName: 'aller sans retour',
    description: 'hhshhshshsh dhehhdh jsjjsjsj jjdjjdjsjkk kkdejjs  jz kzkiziiz  kzkkks skesjdj dxkkszki kkekk kzkkjjd jjjzj jjjkdjzq klorkije jezkjdejndj jjhhzs jjzsjjszjj jzsjjjsz jjszzhnjnjse jhjzsjks jhds  hse   hesjn esjjs sjjzs sz hsz sjsjkiesd sjsdj szdjskish szdkisd dius skish skis bszisnsz is szoskhs szoeshdhd iesesiiesbg oieshegeb',
    reserved: true,
  },
  {
    id: 'tgdg1', missionName: 'aller and go', description: 'mis,snjshsn', reserved: false,
  },
  {
    id: 't7dg1', missionName: 'go and stop', description: '7andhjshsjjsjjsjshshssnj', reserved: false,
  }];
  let i = 0;
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
          i += 1;
          const {
            id, missionName, description, reserved,
          } = mission;
          return (
            <tr key={id} style={(i % 2 === 0) ? { backgroundColor: '#fff' } : { backgroundColor: 'rgb(242, 242, 242)' }}>
              <td>{missionName}</td>
              <td>{description}</td>
              <td>
                {reserved
            && (
            <button type="submit" className="active-member"> Active Member</button>)}
                {!reserved
            && (<button type="submit" className="not-member"> NOT A MEMBER</button>)}
              </td>
              <td>
                {!reserved
              && (<button type="submit" className="join-mission">Join Mission</button>)}
                { reserved
               && (<button type="submit" className="leave-mission">Leave Mission</button>
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
