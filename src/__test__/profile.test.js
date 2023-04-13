import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Profile from '../components/Profile';
import '@testing-library/jest-dom';

// Mock the useSelector hook to return fake state
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Profile', () => {
  test('renders the component with filtered missions and rockets', () => {
    const missions = [
      { mission_id: '1', mission_name: 'Mission 1', reserved: true },
      { mission_id: '2', mission_name: 'Mission 2', reserved: false },
    ];
    const rockets = [
      { id: '1', name: 'Rocket 1', reserved: true },
      { id: '2', name: 'Rocket 2', reserved: false },
    ];
    // Set the mocked useSelector hook to return fake state
    useSelector.mockImplementation((selectorFn) =>
      selectorFn({
        missions: { missions },
        rockets,
      })
    );

    render(<Profile />);

    // Expect the filtered missions to be rendered
    expect(screen.getByText('my missions')).toBeInTheDocument();
    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.queryByText('Mission 2')).not.toBeInTheDocument();

    // Expect the filtered rockets to be rendered
    expect(screen.getByText('my rockets')).toBeInTheDocument();
    expect(screen.getByText('Rocket 1')).toBeInTheDocument();
    expect(screen.queryByText('Rocket 2')).not.toBeInTheDocument();
  });
});
