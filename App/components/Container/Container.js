import React, { Component } from 'react';
import PropTypes from "prop-types";
import { View } from "react-native";

import styles from "./ContainerStyles";

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

   
    render() {
        return (
            <View style={styles.container}>
              {this.props.children}
            </View>
        );
    }
}

Container.propTypes = {
    children: PropTypes.any,
};

export default Container;




