import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,  ScrollView,FlatList, } from 'react-native';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const FilterModal = ({ isVisible, onClose, data, onSelect }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxPress = (sectionTitle, itemIndex) => {
        const selectedItem = data.find((section) => section.title === sectionTitle)?.data[itemIndex];
        const updatedItems = [...selectedItems];
      
        // Toggle selection
        const itemIndexInSelected = selectedItems.findIndex(
          (item) => item.id === selectedItem.id
        );
      
        if (itemIndexInSelected !== -1) {
          updatedItems.splice(itemIndexInSelected, 1);
        } else {
          updatedItems.push(selectedItem);
        }
      
        setSelectedItems(updatedItems);
      };
    const renderItem = ({ item, index }) => (
        <TouchableOpacity
          style={[
            styles.checkboxContainer,
            selectedItems.some((selectedItem) => selectedItem.id === item.id) &&
              styles.selectedCheckbox,
          ]}
          onPress={() => handleCheckboxPress(item.sectionIndex, index)}
        >
            <MaterialIcons name="check-box-outline-blank" size={11} color="black" />
          <Text style={styles.checkboxLabel}>{item.label}</Text>
          {selectedItems.some((selectedItem) => selectedItem.id === item.id) && (
            <AntDesign name="check" size={18} color="#000000" />
          )}
        </TouchableOpacity>
      );
    
      const renderSection = ({ item: section }) => (
        <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{section.title}</Text>
    <FlatList
      data={section.data}
      renderItem={({ item, index }) => renderItem({ item, index, sectionIndex: section.title })}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}  // Set numColumns to 2
    />
  </View>
      );
    
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Filters</Text>
        <FlatList
          data={data}
          renderItem={renderSection}
          keyExtractor={(section) => section.title}
        />
        <TouchableOpacity style={styles.confirmButton} onPress={() => onSelect(selectedItems)}>
          <Text style={styles.confirmButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: '90%', // Adjust the height as needed
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  modalTitle: {
    color: '#0E4889',
    fontSize: 18,
    lineHeight: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'balow-Regular',
    marginBottom: 10,
    color:'#0E4889'
  },
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  selectedCheckbox: {
    backgroundColor: '#0E4889',
  },
  checkboxLabel: {
    marginLeft: 5,
    color:'#333333',
    fontSize:13
  },
  confirmButton: {
    backgroundColor: '#0E4889',
    padding: 15,
    borderRadius: 49,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default FilterModal;
