import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from 'redux/rockets/rocketsSlice';
import Rockets from 'components/Rockets';
import '@testing-library/jest-dom';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('redux/rockets/rocketsSlice', () => ({
  getRockets: jest.fn(),
}));

const mockRocketData = [
  {
    id: 'falcon9',
    name: 'Falcon 9',
    description: 'Description for Falcon 9',
    flickr_image: 'https://example.com/falcon9.jpg',
    reserved: false,
  },
  {
    id: 'falconheavy',
    name: 'Falcon Heavy',
    description: 'Description for Falcon Heavy',
    flickr_image: 'https://example.com/falconheavy.jpg',
    reserved: true,
  },
];

describe('Rockets', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    getRockets.mockClear();
  });

  test('renders list of rockets', () => {
    useSelector.mockReturnValue(mockRocketData);

    render(<Rockets />);

    expect(
      screen.getByRole('heading', { name: /falcon 9/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /falcon heavy/i })
    ).toBeInTheDocument();
    expect(screen.getByText('Description for Falcon 9')).toBeInTheDocument();
    expect(
      screen.getByText('Description for Falcon Heavy')
    ).toBeInTheDocument();
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();
  });

  test('dispatches getRockets action if there are no rockets in the store', () => {
    useSelector.mockReturnValue([]);

    render(<Rockets />);

    expect(getRockets).toHaveBeenCalledTimes(1);
  });

  test('does not dispatch getRockets action if there are rockets in the store', () => {
    useSelector.mockReturnValue(mockRocketData);

    render(<Rockets />);

    expect(getRockets).not.toHaveBeenCalled();
  });

  test('renders RocketItem component for each rocket in the store', () => {
    useSelector.mockReturnValue(mockRocketData);

    render(<Rockets />);

    expect(screen.getAllByRole('article')).toHaveLength(2);

    const rocketItems = screen.getAllByRole('article');
    expect(rocketItems[0]).toHaveTextContent('Falcon 9');
    expect(rocketItems[1]).toHaveTextContent('Falcon Heavy');
    expect(rocketItems[0]).toHaveTextContent('Description for Falcon 9');
    expect(rocketItems[1]).toHaveTextContent('Description for Falcon Heavy');
    expect(rocketItems[0]).toHaveAttribute('id', 'falcon9');
    expect(rocketItems[1]).toHaveAttribute('id', 'falconheavy');
    expect(rocketItems[0]).not.toHaveTextContent('Reserved');
    expect(rocketItems[1]).toHaveTextContent('Reserved');
  });
});
