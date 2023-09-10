import Header from './components/layout/Header';
import Main from './components/layout/Main';
import TrackerContextProvider from './context/TrackerContextProvider';

const App = () => {
	return (
		<TrackerContextProvider>
			<Header />
			<Main />
		</TrackerContextProvider>
	);
};

export default App;
