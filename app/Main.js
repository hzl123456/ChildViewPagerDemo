import React, {Component} from 'react';
import {View} from 'react-native';
import ScrollableTabView  from  'react-native-scrollable-tab-view';
import ChildItem from './ChildItemView'

const tabNamesArray = ['One', 'Two','Three'];

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {isLocked: false}
    }

    render() {
        return (
            <View style={ {marginTop: 20, flex: 1}}>
                <ScrollableTabView
                    locked={this.state.isLocked}>
                    {this._getChildItem()}
                </ScrollableTabView>
            </View>
        )
    }

    _getChildItem = () => {
        let array = new Array();
        for (let i = 0; i < tabNamesArray.length; i++) {
            array.push(<ChildItem hasTouch={this._hasTouch} key={i} tabLabel={tabNamesArray[i]}/>)
        }
        return array;
    }

    //true表示内部需要滑动，此时外部需要lock住
    _hasTouch = (isTouch) => {
        this.setState({isLocked: isTouch})
    }
}