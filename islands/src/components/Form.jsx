import React, {useState} from 'react';
import '../styles/Form.scss';
import {getRandomInt} from "../utils/utils";

const MIN_VAL = 3;

function FormData(props) {
    const [M, setNumOfRows] = useState(getRandomInt(MIN_VAL, 10));
    const [N, setNumOfColumns] = useState(getRandomInt(MIN_VAL, 10));

    return (
        <div className={'form-wrapper'}>
            <div className={'form-title'}>Please enter bitmap size:</div>
            <div className={'form-row'}><label>Number of rows</label> <input type={'number'} min={MIN_VAL} defaultValue={M}
                                                         onChange={(e) => setNumOfRows(e.target.value)}/></div>
            <div className={'form-row'}><label>Number of columns</label> <input type={'number'} min={MIN_VAL} defaultValue={N}
                                                             onChange={(e) => setNumOfColumns(e.target.value)}/></div>
            <div className={'form-footer'}>
                <button className={'app-button'} onClick={() => props.handleRandomize(N, M)}>RANDOMIZE</button>
            </div>

        </div>
    )
}


export default React.memo(FormData);