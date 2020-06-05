import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Background } from '~/components/Background';

const Dashboard = () => {
  return <Background />;
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={32} color={tintColor} />
  ),
};

export default Dashboard;
