import React from "react";
import styled from "styled-components";
import { Container, SubjectResume, TextApp } from "../../Components";
import { SafeAreaView, FlatList, Dimensions } from "react-native";
import { CalendarList } from "react-native-calendars";
const SCREEN_WIDTH = Dimensions.get("screen").width;
const subjects = [
  {
    id: 1,
    title: "Fisica",
    date: "19/12/2019 08:52",
    place: "Biblioteca central",
    image: require("../../assets/images/física.png")
  },
  {
    id: 2,
    title: "Dibujo",
    date: "19/12/2019 08:52",
    place: "Biblioteca ICB",
    image: require("../../assets/images/dibujo.png")
  },
  {
    id: 3,
    title: "Programaciónn",
    date: "19/12/2019 08:52",
    place: "Biblioteca FIEE",
    image: require("../../assets/images/programacion.png")
  },
  {
    id: 4,
    title: "Fisica",
    date: "19/12/2019 08:52",
    place: "Biblioteca central",
    image: require("../../assets/images/física.png")
  },
  {
    id: 5,
    title: "Dibujo",
    date: "19/12/2019 08:52",
    place: "Biblioteca ICB",
    image: require("../../assets/images/dibujo.png")
  },
  {
    id: 6,
    title: "Programaciónn",
    date: "19/12/2019 08:52",
    place: "Biblioteca FIEE",
    image: require("../../assets/images/programacion.png")
  }
];
const CalendarTutorLayout = props => {
  const { onPressItem } = props;
  return (
    <Container>
      <CalendarContainer style={{ elevation: 12 }}>
        <CalendarList
          // Enable horizontal scrolling, default = false
          horizontal={true}
          // Enable paging on horizontal, default = false
          pagingEnabled={true}
          // Set custom calendarWidth.
          calendarWidth={320}
        />
      </CalendarContainer>
      <TextApp
        bold="500"
        fontSize="20px"
        color="#535157"
        align="left"
        mt="18px"
        mb="10px"
      >
        Tutorias Pendientes
      </TextApp>

      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={subjects}
          renderItem={({ item }) => (
            <SubjectResume
              isPrice={false}
              item={{
                title: item.title,
                date: item.date,
                place: item.place,
                image: item.image
              }}
              onPress={onPressItem}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    </Container>
  );
};
export default CalendarTutorLayout;
const CalendarContainer = styled.View`
  width: 320px;
  background-color: transparent;
  align-self: center;
`;
