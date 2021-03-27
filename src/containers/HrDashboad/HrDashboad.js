import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import {dataHrEvent} from '../../helpers/dataHrEvent';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';

const HrDashboard = () => {
  const [isShowView, setIsShowView] = useState(false);
  const [eventItem, setEventItem] = useState(null);
  const navigation = useNavigation();

  const _onShowView = value => {
    console.log(value);

    setIsShowView(!isShowView);
  };

  const _getListEvent = item => {
    setEventItem(item);
  };

  const _onLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Modal
        isVisible={isShowView}
        onBackdropPress={_onShowView}
        useNativeDriverForBackdrop={true}
        useNativeDriver={true}>
        <View style={styles.modalListEvent}>
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
          <Text style={styles.eventItemText}>Status: {eventItem?.status}</Text>
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

export default HrDashboard;
