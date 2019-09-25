import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as commonActionCreators from "../modules/common";

const withTheme = WrappedComponent => {
    const EnhancedComponent = connect(
        ({ common: {themeMode}}) => ({
            themeMode
        }),
        dispatch => ({
            commonActions: bindActionCreators(commonActionCreators, dispatch)
        })
    )(WrappedComponent);
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return <EnhancedComponent {...this.props}/>;
        }
    };
};

export default withTheme;