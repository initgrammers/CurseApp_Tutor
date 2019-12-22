import React from "react";
import styled from "styled-components";
import {
  TextApp,
  CoverHeader,
  CloseView,
  AvatarVerySmall,
  TextWithLink,
  TopicText,
  DotWithTopicText,
  Button
} from "../../Components";
import { ScrollView } from "react-native";
const name = "Cristian Ronda";
const OfferScreenLayout = props => {
  const { onPressViewProfile } = props;
  return (
    <Container>
      <Content>
        <ScrollView>
          <CloseView top={0} />
          <TextApp color="white" bold="bold" fontSize="14px" mt="0px">
            Nueva Oferta
          </TextApp>
          <CoverHeader
            subject={{
              title: "Física",
              image: require("../../assets/images/física.png")
            }}
            style={{
              width: "100%",
              height: 180,
              alignSelf: "center",
              borderRadius: 10,
              overflow: "hidden",
              elevation: 10
            }}
          />
          <TextApp
            color="white"
            bold="600"
            mt="8px"
            fontSize="14px"
            align="left"
          >
            Servicio Contratado por:
          </TextApp>
          <ContainerUser>
            <AvatarVerySmall />
            <TextWithLink
              onPress={onPressViewProfile}
              color="#BDBDBD"
              text={name}
              linkText="Ver Perfil"
            />
          </ContainerUser>
          <TopicText
            title="Fecha: "
            text="19/12/2019 8:25"
            colorTitle="white"
            colorText="white"
            fontSizeTitle="14px"
            fontSizeText="12px"
          />
          <DotWithTopicText
            isLigh
            title="Temas: "
            list={["Resolver ejericicios"]}
          />
          <TopicText
            title="Lugar: "
            text="Biblioteca ICB"
            colorTitle="white"
            colorText="white"
            fontSizeTitle="14px"
            fontSizeText="12px"
          />
          <TopicText
            title="Horas: "
            text="3"
            colorTitle="white"
            colorText="white"
            fontSizeTitle="14px"
            fontSizeText="12px"
          />
          <ContainerPay>
            {["Tarifa Materia", "Costo total"].map((item, index) => (
              <DetailContainer key={index}>
                <TextDetail left={true}>{item}</TextDetail>
                <TextDetail>$ 5.00</TextDetail>
              </DetailContainer>
            ))}
            <DetailContainer>
              <TextDetail left={true}>Pago en Efectivo</TextDetail>
              <TextDetail bold={true}>$ {Number(6 * 5).toFixed(2)}</TextDetail>
            </DetailContainer>
          </ContainerPay>
          <Button title="Agendar" width={150} height={48} mt="0px" />
        </ScrollView>
      </Content>
    </Container>
  );
};
export default OfferScreenLayout;
const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
const Content = styled.View`
  width: 90%;
  height: 90%;
  background-color: #384862;
  border-radius: 10px;
  padding: 21px 9px;
`;
const ContainerUser = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const ContainerPay = styled.View`
  margin-top: 12px;
  flex-direction: column;
  width: 100%;
  height: 109px;
  border: 1px solid #dddddd;
  background-color: white;
  border-radius: 10px;
`;
const TextDetail = styled.Text`
  flex: 1;
  font-family: "montserrat";
  font-size: 14px;
  text-align: ${props => (props.left ? "left" : "right")};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
`;
const DetailContainer = styled.View`
  flex-direction: row;
  padding: 8px 8px;
`;
