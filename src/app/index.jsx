import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { Provider as GridSystemProvider } from 'app/components/GridSystem';
import App from 'app/containers/App';
import reduxStore from 'app/store/redux';
import './styles/vendor.styl';
import './styles/app.styl';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
    <HashRouter>
        <ReduxProvider store={reduxStore}>
            <GridSystemProvider
                breakpoints={[576, 768, 992, 1200, 1600]}
                containerWidths={[540, 720, 960, 1140]}
                columns={12}
                gutterWidth={0}
                layout="floats"
            >
                <App />
            </GridSystemProvider>
        </ReduxProvider>
    </HashRouter>,
    container
);