import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CentralTabBar = ({ tabs, renderContent, selectedTab, setSelectedTab }) => {
  return (
    <View style={styles.container}>
      
        {tabs.title && ( <View style={styles.topLine}><Text style={styles.servicesText}>{tabs.title}</Text>
        <Text style={styles.viewAllText}>{tabs.viewAllText}</Text></View>)}
       
      
      {/* Central Tab Bar */}
      <View style={styles.tabBar}>
        {tabs.items.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tab,
              selectedTab === tab.id && styles.activeTab,
             
            ]}
            onPress={() => setSelectedTab(tab.id)}
          >
            <Text
              style={[
                styles.tabtext,
                selectedTab === tab.id && styles.activeTabtext,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Render the selected content */}
      {renderContent(selectedTab)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  servicesText: {
    fontFamily: "Barlow-Bold",
    color: "#0E4889",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 19.2,
  },
  viewAllText: {
    color: "#D51D33",
    fontFamily: "Barlow-Bold",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14.4,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 40,
    backgroundColor: "transparent",
    borderRadius: 200,
    borderColor: "#0E4889",
    borderWidth: 2,
    marginTop: 20,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabtext: {
    color: "#0E4889",
  },
  activeTabtext: {
    color: "white",
  },
  activeTab: {
    backgroundColor: "#0E4889",
    borderRadius: 200,
    height: 40,
  },
});

export default CentralTabBar;
