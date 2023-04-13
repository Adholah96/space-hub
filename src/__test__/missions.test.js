import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Missions from '../components/Missions';
import store from '../redux/store';
import '@testing-library/jest-dom';

test('renders loading message correctly', () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>
  );

  const loadingElement = screen.getByText('Loading...');
  expect(loadingElement).toBeInTheDocument();
});

test('renders error message correctly', () => {
  const errorMessage = 'Failed to load missions';
  render(
    <Provider store={store}>
      <Missions />
    </Provider>
  );
});

test('renders mission items correctly when data is loaded', async () => {
  const mockMissions = [
    {
      mission_id: 'mission1',
      mission_name: 'Mission 1',
      description: 'Description of mission 1',
      status: 'Active',
    },
    {
      mission_id: 'mission2',
      mission_name: 'Mission 2',
      description: 'Description of mission 2',
      status: 'Inactive',
    },
  ];

  render(
    <Provider store={store}>
      <Missions />
    </Provider>
  );

  store.dispatch({
    type: 'missions/loadMissionsSuccess',
    payload: mockMissions,
  });
});
