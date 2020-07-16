import React from  'react';

const timerModal = (props) => {
    const summary = props.workMode ? "work" : "break"
    const notSummary = props.workMode ? "break" : "work"
    
    return (
        <div>
            {summary} time!
            <button>Pause and continue {notSummary}</button>
            <button>start {summary}</button>
        </div>
    )
};

export default timerModal;