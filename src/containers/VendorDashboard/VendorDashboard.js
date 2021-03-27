import React, {useState} from 'react';
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
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const VendorDashboard = () => {
  const [isShowView, setIsShowView] = useState(false);
  const [eventItem, setEventItem] = useState(null);
  const [reasonReject, setReasonReject] = useState();
  const [isReason, setIsReason] = useState(false);
  const [isDateOne, setIsDateOne] = useState(false);
  const [dateOne, setDateOne] = useState(new Date());
  const [isDateTwo, setIsDateTwo] = useState(false);
  const [dateTwo, setDateTwo] = useState(new Date());
  const [isDateThree, setIsDateThree] = useState(false);
  const [dateThree, setDateThree] = useState(new Date());
  const [isDateGroup, setIsDateGroup] = useState(false);
  const navigation = useNavigation();

  const _onShowView = () => {
    setIsShowView(!isShowView);
    setIsDateOne(false);
    setIsDateTwo(false);
    setIsDateThree(false);
  };

  const _onShowReason = () => {
    setIsReason(!isReason);
    setIsShowView(false);
  };

  const _getListEvent = item => {
    setEventItem(item);
  };

  const _onLogout = () => {
    navigation.navigate('Login');
  };

  const _onShowDateGroup = () => {
    setIsDateGroup(!isDateGroup);
  };

  const _onShowDateOne = () => {
    setIsDateOne(!isDateOne);
  };

  const _onShowDateTwo = () => {
    setIsDateTwo(!isDateTwo);
  };

  const _onShowDateThree = () => {
    setIsDateThree(!isDateThree);
  };

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isShowView}
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
              Event: {eventItem?.eventName}
            </Text>
            <Text style={styles.eventItemText}>
              Vendor Name: {eventItem?.vendorName}
            </Text>
            <Text style={styles.eventItemText}>
              Created Date: {eventItem?.createdDate}
            </Text>
            <Text style={styles.eventItemText}>
              Confirm Date: {eventItem?.confirmDate}
            </Text>
            <Text style={styles.eventItemText}>
              Status: {eventItem?.status}
            </Text>
          </ScrollView>
          {isDateGroup && (
            <>
              <TouchableOpacity
                style={styles.dateGroup}
                onPress={_onShowDateOne}>
                <Text style={styles.dateText}>
                  {moment(dateOne).subtract(10, 'days').calendar().toString()}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dateGroup}
                onPress={_onShowDateTwo}>
                <Text style={styles.dateText}>
                  {moment(dateTwo).subtract(10, 'days').calendar().toString()}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.dateGroup}
                onPress={_onShowDateThree}>
                <Text style={styles.dateText}>
                  {moment(dateThree).subtract(10, 'days').calendar().toString()}
                </Text>
              </TouchableOpacity>
            </>
          )}

          {isDateOne && (
            <>
              <DatePicker date={dateOne} onDateChange={setDateOne} />
              <TouchableOpacity
                style={styles.createDate}
                onPress={_onShowDateOne}>
                <Text style={styles.textCreateDate}>Create Date 1</Text>
              </TouchableOpacity>
            </>
          )}

          {isDateTwo && (
            <>
              <DatePicker date={dateTwo} onDateChange={setDateTwo} />
              <TouchableOpacity
                style={styles.createDate}
                onPress={_onShowDateTwo}>
                <Text style={styles.textCreateDate}>Create Date 2</Text>
              </TouchableOpacity>
            </>
          )}

          {isDateThree && (
            <>
              <DatePicker date={dateThree} onDateChange={setDateThree} />
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
        isVisible={isReason}
        onBackdropPress={_onShowReason}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}>
        <View style={styles.modalListEvent}>
          <ScrollView>
            <Text style={styles.modalTitle}>Please tell us the reason</Text>
            <TextInput
              style={styles.reasonInput}
              value={reasonReject}
              onChangeText={text => {
                setReasonReject(text);
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
