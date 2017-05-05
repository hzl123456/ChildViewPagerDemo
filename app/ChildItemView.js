import React, {PureComponent, PropTypes} from 'react';
import {View, Text, ScrollView, StyleSheet, Platform} from 'react-native';
import ViewPager from 'react-native-viewpager';

const dataSource = new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2,});
const colors = ['red', 'blue', 'yellow']

export default class ChildItemView extends PureComponent {

    static propTypes = {
        hasTouch: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {key: 'One'},
                {key: 'Two'},
                {key: 'Three'},
                {key: 'Four'},
                {key: 'Extra'},
                {key: 'Five'},
                {key: 'Six'},
                {key: 'Seven'},
                {key: 'Eight'},
                {key: 'Nine'},
                {key: 'Ten'},
                {key: 'Eleven'},
                {key: 'Twelve'},
                {key: 'Thirdteen'},
                {key: 'Fourteen'},
                {key: 'Fiveteen'}]
        }
    }


    render() {
        return (
            <View style={{marginTop: Platform.OS === 'ios' ? 20 : 0}}>
                <ScrollView>
                    <View style={{flex: 1}}>
                        {this._getChildView()}
                    </View>
                </ScrollView>
            </View>
        )
    }

    _getChildView = () => {
        let array = new Array();
        for (let i = 0; i < this.state.data.length; i++) {
            array.push(this._getFlatListItem(this.state.data[i], i))
        }
        return array
    }

    _getFlatListItem = (item, position) => {
        if (item.key === 'Extra') {//
            return (
                <View
                    key={position}
                    style={{height: 200, flex: 1}}>
                    <ViewPager
                        hasTouch={(hasTouch) => this.props.hasTouch && this.props.hasTouch(hasTouch)}
                        renderPage={(item, page) => <SwiperChild backgroundColor={colors[page]}/>}
                        dataSource={dataSource.cloneWithPages(['1', '2', '3'])}
                        isLoop={false}
                        renderPageIndicator={false}
                        autoPlay={false}>
                    </ViewPager>
                </View>)
        } else {//普通view+text
            return (
                <View
                    key={position}
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        height: 60
                    }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 15
                    }}>{item.key}</Text>
                </View>
            )
        }
    }
}

export class SwiperChild extends PureComponent {

    static  propTypes = {
        backgroundColor: PropTypes.string
    }

    render() {
        return (
            <View style={{flexDirection: 'row', flex: 1}}>

                <View style={styles.view}>
                    <Text style={[styles.text, {backgroundColor: this.props.backgroundColor}]}>One</Text>
                </View>

                <View style={styles.view}>
                    <Text style={[styles.text, {backgroundColor: this.props.backgroundColor}]}>Tne</Text>
                </View>

                <View style={styles.view}>
                    <Text style={[styles.text, {backgroundColor: this.props.backgroundColor}]}>Three</Text>
                </View>

            </View>)

    }
}

const styles = StyleSheet.create({

    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        padding: 15,
        color: '#fff',
        backgroundColor: 'blue',
        fontSize: 16,
    }
})