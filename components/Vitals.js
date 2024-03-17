import React from "react";
import { View, Text } from "react-native";
import { Table, Row } from "react-native-table-component";
import { Iconify } from 'react-native-iconify';

const VitalsRow = ({ rowData, textStyle }) => (
  <Row
    data={rowData.map((cellData, cellIndex) => (
      <View
        key={cellIndex}
      
      >
        {cellIndex === 6 && (
          <View style={{padding:5,height:20,width:20,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:10,marginLeft:10,marginTop:10}}>
           <Iconify icon="iconamoon:edit-thin" size={16} color={"#545454"} />
           </View>
        )}
        {cellIndex === 7 && (
           <View style={{padding:5,height:20,width:20,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:10,marginLeft:10,marginTop:10}}>
         <Iconify icon="ic:outline-delete" size={16} color={"#545454"} />
         </View>
        )}
        <Text style={textStyle}>{cellData}</Text>
      </View>
    ))}
    style={{
      height: 40,
      backgroundColor: "#D4D4D4",
      borderBottomWidth: 0.4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    textStyle={textStyle}
  />
);

const Vitals = () => {
  const headings = [
    "Temp",
    "Pulse",
    "BP",
    "O^2",
    "Weight",
    "Sugar",
    "Edit",
    "Delete",
  ];
  const data = [
    ["98°F", "72 bpm", "120/80 mmHg", "98%", "75 kg", "Normal", "", ""],
    ["99°F", "80 bpm", "130/85 mmHg", "95%", "76 kg", "High", "", ""],
    // Add more data rows as needed
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Table borderStyle={{ borderColor: "#000", backgroundColor: "red" }}>
        <Row
          data={headings.map((heading) => (
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 10,
                color: "#12375C",
              }}
            >
              {heading}
            </Text>
          ))}
          style={{
            height: 40,
            backgroundColor: "#D4D4D4",
            borderBottomWidth: 0.4,
          }}
          textStyle={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 10,
            color: "#12375C",
            backgroundColor: "#0000",
          }}
        />
        {data.map((rowData, index) => (
          <VitalsRow
            key={index}
            rowData={rowData}
            textStyle={{ textAlign: "center", fontSize: 9,color:"#545454",display:'flex',alignItems:'center',justifyContent:'center' }}
          />
        ))}
      </Table>
    </View>
  );
};

export default Vitals;
