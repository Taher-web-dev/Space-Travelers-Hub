import React from 'react';
import ReservedMission from './ReservedMission';
import ReservedRockets from './ReservedRockets';

const MyProfile = () => (
  <div style={{
    width: '90%', margin: '1.25% 5%', display: 'flex', gap: '30px',
  }}
  >
    <ReservedMission />
    <ReservedRockets />
  </div>
);
export default MyProfile;
