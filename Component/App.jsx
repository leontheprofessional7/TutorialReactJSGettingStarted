import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <Button label="Do" />
            </div>
        );
    }
}

const Button = (props) => {
    return (
        <button>{props.label}</button>
    );
};

export default App;