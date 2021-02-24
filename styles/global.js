import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  ghostDetail: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: 'center',
    margin: 20

  },
  ghostName: {
    fontSize: 45,
    fontFamily: 'gentium-bold'
  },
  ghostEvidence: {
    fontSize: 25,
    textAlign: "center",
    paddingVertical: 5,
    fontFamily: 'gentium-regular'
  },
  ghostWeakness: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
    fontFamily: 'gentium-bold'
  },
  ghostStrength: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    fontFamily: 'gentium-bold'
  },
  ghostDescription: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'gentium-italic'
  }, 
  container: {
    display: 'flex',
    margin: 20
  },
  evidenceList: {
    marginBottom: 20
  },
  ghostLabel: {
    fontSize: 22,
    padding: 10,
    fontFamily: 'gentium-bold'
  },
  ghostList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  buttonLabel: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 4
  }
});