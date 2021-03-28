import React, {useState, useReducer} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './styles';
import {dataHrEvent} from '../../helpers/dataHrEvent';
import {useNavigation} from '@react-navigation/native';
import {initState, vendorReducer} from './reducer';
import {
  onShowEventDetail,
  getEventDetail,
  setReasonReject,
  onShowReasonReject,
  setDateFirst,
  setDateSecond,
  setDateThird,
  onShowDateFirst,
  onShowDateSecond,
  onShowDateThird,
  onShowDateGroup,
} from './action';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';

const VendorDashboard = () => {
  const [stateLocal, dispatchLocal] = useReducer(vendorReducer, initState);
  const navigation = useNavigation();

  const _onShowView = () => {
    dispatchLocal(onShowEventDetail());
  };

  const _onShowReason = () => {
    dispatchLocal(onShowReasonReject());
  };

  const _getListEvent = item => {
    dispatchLocal(getEventDetail(item));
  };

  const _onLogout = () => {
    navigation.navigate('Login');
  };

  const _onShowDateGroup = () => {
    dispatchLocal(onShowDateGroup());
  };

  const _onShowDateOne = () => {
    dispatchLocal(onShowDateFirst());
  };

  const _onShowDateTwo = () => {
    dispatchLocal(onShowDateSecond());
  };

  const _onShowDateThree = () => {
    dispatchLocal(onShowDateThird());
  };

  const setDateOne = () => {
    dispatchLocal(setDateFirst());
  };

  return (
    <View style={styles.container}>
      <Modal
        isVisible={stateLocal.isShowEvent}
        onBackdropPress={_onShowView}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}>
        <View style={styles.modalListEvent}>
          <ScrollView>
            <TouchableOpacity style={styles.cancel} onPress={_onShowView}>
              <Text style={styles.cancelText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Event Overview</Text>
            <Text style={styles.eventItemText}>
              Event: {stateLocal.dataEventDetail?.eventName}
            </Text>
            <Text style={styles.eventItemText}>
              Vendor Name: {stateLocal.dataEventDetail?.vendorName}
            </Text>
            <Text style={styles.eventItemText}>
              Created Date: {stateLocal.dataEventDetail?.createdDate}
            </Text>
            <Text style={styles.eventItemText}>
              Confirm Date: {stateLocal.dataEventDetail?.confirmDate}
            </Text>
            <Text style={styles.eventItemText}>
              Status: {stateLocal.dataEventDetail?.status}
            </Text>
          </ScrollView>
          {stateLocal.isDateGroup && (
            <>
              <TouchableOpacity
                style={styles.dateGroup}
                onPress={_onShowDateOne}>
                <Text style={styles.dateText}>
                  {stateLocal.dateFirst.toString()}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dateGroup}
                onPress={_onShowDateTwo}>
                <Text style={styles.dateText}>
                  {String(stateLocal.dateSecond)}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dateGroup}
                onPress={_onShowDateThree}>
                <Text style={styles.dateText}>
                  {String(stateLocal.dateThird)}
                </Text>
              </TouchableOpacity>
            </>
          )}

          {stateLocal.isDateFirst && (
            <>
              <DatePicker
                date={stateLocal.dateFirst}
                onDateChange={setDateOne}
              />
              <TouchableOpacity
                style={styles.createDate}
                onPress={_onShowDateOne}>
                <Text style={styles.textCreateDate}>Create Date 1</Text>
              </TouchableOpacity>
            </>
          )}

          {stateLocal.isDateSecond && (
            <>
              <DatePicker
                date={stateLocal.dateSecond}
                onDateChange={() => {
                  dispatchLocal(setDateSecond());
                }}
              />
              <TouchableOpacity
                style={styles.createDate}
                onPress={_onShowDateTwo}>
                <Text style={styles.textCreateDate}>Create Date 2</Text>
              </TouchableOpacity>
            </>
          )}

          {stateLocal.isDateThird && (
            <>
              <DatePicker
                date={stateLocal.dateThird}
                onDateChange={() => {
                  dispatchLocal(setDateThird());
                }}
              />
              <TouchableOpacity
                style={styles.createDate}
                onPress={_onShowDateThree}>
                <Text style={styles.textCreateDate}>Create Date 3</Text>
              </TouchableOpacity>
            </>
          )}

          <View style={styles.groupButtonEventModal}>
            <TouchableOpacity
              onPress={_onShowDateGroup}
              activeOpacity={0.9}
              style={[styles.buttonEventModal, styles.approveButton]}>
              <Text style={styles.textButtonEvent}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={_onShowReason}
              activeOpacity={0.9}
              style={[styles.buttonEventModal, styles.rejectButton]}>
              <Text style={styles.textButtonEvent}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={stateLocal.isReason}
        onBackdropPress={_onShowReason}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}>
        <View style={styles.modalListEvent}>
          <ScrollView>
            <Text style={styles.modalTitle}>Please tell us the reason</Text>
            <TextInput
              style={styles.reasonInput}
              value={stateLocal.reason}
              onChangeText={text => {
                dispatchLocal(setReasonReject(text));
              }}
            />
          </ScrollView>

          <View style={styles.groupButtonEventModal}>
            <TouchableOpacity
              onPress={_onShowReason}
              activeOpacity={0.9}
              style={[styles.buttonEventModal, styles.approveButton]}>
              <Text style={styles.textButtonEvent}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ScrollView horizontal={true}>
        <View style={styles.content}>
          <View style={styles.contentHead}>
            <Text style={[styles.contentText, styles.contentTitle]}>Event</Text>
          </View>
          <View style={styles.contentHead}>
            <Text style={styles.contentText}>Vendor</Text>
          </View>
          <View style={styles.contentHead}>
            <Text style={styles.contentText}>Created Date</Text>
          </View>
          <View style={styles.contentHead}>
            <Text style={styles.contentText}>Confirm Date</Text>
          </View>
          <View style={styles.contentHead}>
            <Text style={styles.contentText}>Status</Text>
          </View>
          <View style={styles.contentHead}>
            <Text style={styles.contentText} />
          </View>
        </View>
        {dataHrEvent.map(item => {
          return (
            <View style={styles.content}>
              <View>
                <Text style={styles.contentText}>{item.eventName}</Text>
              </View>
              <View>
                <Text style={styles.contentText}>{item.vendorName}</Text>
              </View>
              <View>
                <Text style={styles.contentText}>{item.createdDate}</Text>
              </View>
              <View>
                <Text style={styles.contentText}>{item.confirmDate}</Text>
              </View>
              <View>
                <Text style={styles.contentText}>{item.status}</Text>
              </View>
              <TouchableOpacity
                style={styles.viewEvent}
                onPress={() => {
                  _onShowView();
                  _getListEvent(item);
                }}>
                <Text style={styles.viewEventText}>View</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.logout}
        onPress={_onLogout}>
        <Text style={styles.titleLogout}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VendorDashboard;
