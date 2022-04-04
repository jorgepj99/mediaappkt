import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import * as ProductStore from '../store/Product';
import { ApplicationState } from '../store';
import { Button, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

type ProductProps =
    ProductStore.ProductsList &
    typeof ProductStore.actionCreators &
    RouteComponentProps<{}>;
class Product extends React.PureComponent<ProductProps> {
    public render() {
        return (
            <React.Fragment>
                <div className="fixed-title">
                    <h1>List of Products</h1>
                    <Button type="button"
                        className="btn btn-primary btn-lg top-buttons"
                        onClick={() => { this.props.refresh(); }}>
                        Refresh
                    </Button>
                    <NavLink tag={Link} to="/add-product" className=" add btn btn-primary btn-lg top-buttons">
                        <Button type="button" className="btn-primary btn-lg btn no-border">
                            Add
                        </Button>
                    </NavLink>
                </div>
                <div className="productlist">
                {this.props.product.length > 0 ?
                    this.props.product.map(element => {
                        console.log("element: " + element);
                        //return (<div><p>{element.name}</p><p>{element.description}</p><p>{element.price}</p><p>{element.description}</p></div>);
                        return (<div className="surface-section product-box">
    <div className="font-medium text-3xl text-900 mb-3">{element.name}</div>
    <ul className="list-none p-0 m-0">
        <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Description</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
            {element.description}</div>
        </li>
        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">Price</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{element.price }</div>
        </li>
        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                                    <div className="text-500 w-6 md:w-2 font-medium">Family</div>
                                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{element.family}</div>
        </li>
    </ul>
</div>)
                        }) : ""
                }
                
            </div>
            </React.Fragment>
        );
    }
};
export default connect(
    (state: ApplicationState) => state.product,
    ProductStore.actionCreators
)(Product);
