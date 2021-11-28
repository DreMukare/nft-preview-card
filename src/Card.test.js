import { render, screen } from '@testing-library/react';
import Card from './components/Card';

it('matches snapshot', () => {
	const { asFragment } = render(<Card />);

	expect(asFragment()).toMatchSnapshot();
});

test('whether paragraph is rendered', () => {
	const { getByText } = render(<Card />);

	expect(
		getByText(/Our Equilibrium collection promotes balance and calm./i)
	).toBeInTheDocument();
});

test('whether creator mentioned in attribution', () => {
	const { getByText } = render(<Card />);

	expect(getByText(/Jules Wyvern/i)).toBeInTheDocument();
});
