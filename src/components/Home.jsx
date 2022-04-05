import { useContext } from 'react';
import { currentContext } from '../App';
export const Home = () => {
	const homeContext = useContext(currentContext);
	return <div>{homeContext} Home</div>;
};
