import React, {useState} from 'react';
import FormData from './components/Form';
import Grid from './components/Grid';
import {generateMatrix, countIslands} from './utils/utils';
import './App.scss';

function App() {
    const [matrix, setMatrix] = useState(null);
    const [numOfIslands, setNumOfIslands] = useState(null);

    return (
        <div className="app">
            {!(matrix && matrix.length) ?
                <FormData handleRandomize={(N, M) => {
                    setMatrix(generateMatrix(N, M))
                }}/> :
                <>
                    <Grid matrix={matrix} numOfIslands={numOfIslands} />
                    {numOfIslands === null ? <button className={'app-button'}
                         onClick={() => {
                             const {count, grid} = countIslands(matrix);
                             setMatrix(grid);
                             setNumOfIslands(count);
                         }}>SOLVE</button>
                    : <div className={'flex-center-container'}>
                            <div>FOUND {numOfIslands} ISLANDS!</div>
                            <div><button className={'app-button'} onClick={() => { setMatrix(null); setNumOfIslands(null); }}>RESTART</button></div>
                         </div>}
                </>}
        </div>

    );
}

export default App;
