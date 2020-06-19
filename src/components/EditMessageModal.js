/**
 * 
 * 发送信息页信息操作组件
 */
import React from 'react';
import PropTypes from 'prop-types';

import {autobind} from 'core-decorators';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity, } from 'react-native';
import Modal, { ModalContent } from 'react-native-modals'; 

import {unitHeight, unitSize, isIphoneXAndUp} from '../../misc/Adapt';

@autobind
export default class EditMessageModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
  
        return (
            <Modal.BottomModal
                width={0.8} //没有作用
                actionsBordered  
                visible={this.props.editMessageModalVisible}  
                onTouchOutside={()=>this.props.toggleEditModal(false, {})}  
            > 
                <ModalContent style={{paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0}}>  
                    {/* <StatusBar
                        hidden={true}
                    /> */}
                    <View style={styles.tabWrap}>
                        <Text style={{
                            fontSize: unitSize(15), color: '#999'
                        }}>Please select an action</Text>
                    </View>
                    <TouchableOpacity activeOpacity={1} onPress={this.props.resendMsg}>
                        <View style={{...styles.tabWrap, height: unitHeight*50}}>
                            <Text style={{
                                fontSize: unitSize(15), color: '#000'
                            }}>Resend</Text>
                        </View>
                    </TouchableOpacity>  
                    <TouchableOpacity activeOpacity={1} onPress={this.props.deleteMsg}>
                        <View style={{...styles.tabWrap, height: unitHeight*50}}>
                            <Text style={{
                                fontSize: unitSize(15), color: '#000'
                            }}>Delete</Text>
                        </View>
                    </TouchableOpacity>                                   
                    <TouchableOpacity activeOpacity={1} onPress={()=> this.props.toggleEditModal(false, {})}>
                        <View style={{
                            marginBottom: isIphoneXAndUp() ? unitHeight*23 : 0,
                            ...styles.tabWrap, height: unitHeight*48, borderBottomWidth: unitHeight*0
                            }}>
                            <Text style={{
                                fontSize: unitSize(15), color: '#60BD6E'
                            }}>Cancel</Text>
                        </View>
                    </TouchableOpacity>                    
                </ModalContent>
            </Modal.BottomModal>     
        )
    }
}

const styles = StyleSheet.create({  
    tabWrap: {
        height: unitHeight*55,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: unitHeight*1,
        borderBottomColor: '#ccc',
        //backgroundColor: '#ccc'
    }
})

const propTypes = {
    editMessageModalVisible: PropTypes.bool,
    toggleEditModal: PropTypes.func,
    resendMsg: PropTypes.func,
    deleteMsg: PropTypes.func
};
EditMessageModal.propTypes = propTypes;