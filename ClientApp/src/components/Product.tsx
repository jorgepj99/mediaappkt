import * as React from 'react';
import { connect } from 'react-redux';
import { Dialog } from 'primereact/dialog';
class Product extends React.Component {
    public render() {

        return (
            <React.Fragment>
                <h1>Product</h1>
                <p>This is a simple example of a React component.</p>
                <p aria-live="polite"><strong>Comprobando conexion a bbdd</strong></p>
            </React.Fragment>
        );
    }
};
export default connect()(Product);
