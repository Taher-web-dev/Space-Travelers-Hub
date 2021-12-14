import { React, useEffect } from 'react';
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
  // let i = 0;
  const adjustMarginButton = () => {
    const btns = Array.from(document.querySelectorAll('button'));
    btns.forEach((btn) => {
      const parent = btn.parentNode.parentNode;
      const h = parent.offsetHeight;
      console.log(parent);
      const margin = `${0.4 * parseInt(h, 10)}`;
      const elements = parent.querySelectorAll('button');
      for (let i = 0; i < elements.length; i += 1) {
        const elem = elements[i];
        if (elem.className.includes('mission')) elem.style.margin = `${margin - 6}px 10% `;
        else elem.style.margin = `${margin}px 0`;
      }
    });
  };
  useEffect(() => adjustMarginButton(), []);
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
          // i += 1;
          const {
            id, missionName, description, reserved,
          } = mission;
          return (
            <tr key={id} style={(reserved) ? { backgroundColor: '#fff' } : { backgroundColor: 'rgb(242, 242, 242)' }}>
              <td className="mission-name">{missionName}</td>
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
