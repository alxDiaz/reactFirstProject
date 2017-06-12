import React     from 'react';
import ReactDOM  from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA_vVWoMjNxpVU7q_276xhF2EKPa9CRDRM';

// Create a new component. This component should produce
// some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put in
// on the page (in the DOM)

ReactDOM.render(<App />,document.querySelector('.container'));