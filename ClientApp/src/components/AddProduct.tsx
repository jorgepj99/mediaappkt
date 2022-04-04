import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import * as AddProcutStore from '../store/AddProduct';
import "primeicons/primeicons.css";                              
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import $ from 'jquery';
type FormProps =
    AddProcutStore.formdata &
    typeof AddProcutStore.actionCreators &
    RouteComponentProps<{}>;
class AddProduct extends React.PureComponent<FormProps> {
    public render() {
        return (
            <React.Fragment>
                <div className="form product-box surface-card p-4 shadow-2 border-round w-full lg:w-6">
                    <div className="text-center mb-5">
                        <img src="favicon.png" alt="Icon" height={50} className="mb-3" />
                        <div className="text-900 text-3xl font-medium mb-3">Adding Product</div>
                    </div>
                    <form>
                        <label htmlFor="name"  className="block text-900 font-medium mb-2">Name</label>
                        <input type="text" id="name" className="w-full mb-3" />
                        <label htmlFor="description" className="block text-900 font-medium mb-2">Description</label>
                        <input type="text" id="description" className="w-full mb-3" />
                        <label htmlFor="family" className="block text-900 font-medium mb-2">Family</label>
                        <input type="text" id="family" className="w-full mb-3" />
                        <label htmlFor="price" className="block text-900 font-medium mb-2">Price</label>
                        <input type="number" id="price" className="w-full mb-3" />
                        <Button className="icon btn-primary" onClick={() => {
                            this.props.addproduct({
                                name: $("#name").val()?.toString(),
                                description: $("#description").val()?.toString(),
                                family: $("#family").val()?.toString(),
                                price: $("#price").val()?.toString()
                            });
                        }}>
                            <p>Add product</p><i className="pi pi-plus"></i></Button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
};
export default connect(
    (state: ApplicationState) => state.addproduct,
    AddProcutStore.actionCreators
)(AddProduct);
