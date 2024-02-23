import { Route, Routes } from 'react-router-dom';
import Diagram from './pages/CircleDiagram/Diagram';

const App = () => {
    return (
        <Routes>
            <Route path="/" index element={<Diagram />} />
        </Routes>
    );
};

export default App;
