import React from 'react';
import {FixedSizeGrid} from "react-window";
import Cell from './Cell.jsx';
import '../styles/Grid.scss';

function Grid(props) {
    const {matrix} = props;

    const GridCell = (props) => {
        return <Cell {...props} item={matrix[props.columnIndex][props.rowIndex]}/>;
    };

    const height = (matrix[0].length > 30 ? 30 : matrix[0].length) * 25;
    const width = (matrix.length > 40 ? 40 : matrix.length) * 25;
    return (
        <FixedSizeGrid
            className="Grid"
            columnCount={matrix.length}
            columnWidth={20}
            height={height}
            rowCount={matrix[0].length}
            rowHeight={20}
            width={width}
        >
            {GridCell}
        </FixedSizeGrid>

    )
}

// Set default props
Grid.defaultProps = {
    matrix: []
};

export default React.memo(Grid);