import React, { Component } from 'react';
import Loader from '../../component/common/loader/Loader';

const isEmpty = (props: any) =>
    props === null ||
    props === undefined ||
    (props.hasOwnProperty("length") && props.length === 0) ||
    (props.constructor === Object && Object.keys(props).length === 0);

const withLoading = (WrappedComponent: any) => {
    return class Loading extends Component {
        render() {
            return isEmpty(this.props) ? (
                <Loader />
            ) : (
                    <WrappedComponent {...this.props} />
                );
        }
    };
};

export default withLoading;
