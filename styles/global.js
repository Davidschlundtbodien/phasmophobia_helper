import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export const globalStyles = StyleSheet.create({
  ghostDetail: {
    flex:1,
    justifyContent: "space-around",
    alignItems: 'center',
  },
  ghostName: {
    fontSize: 50,
    margin: 15,
    fontFamily: 'gentium-bold',
    color: '#f8f8f8'
  },
  ghostEvidenceList: {
    justifyContent: "space-evenly",
    flexDirection: 'row',
    flexWrap: 'wrap'
  },  
  ghostEvidence: {
    fontSize: 25,
    fontFamily: 'gentium-regular',
    color: '#fdfdfd',
    padding: 20
  },
  ghostDetailList: {
    justifyContent: "space-between",
    alignItems: 'center'
  },
  ghostWeakness: {
    fontSize: 20,
    color: '#50a834',
    fontFamily: 'gentium-bold',
    padding: 15,
    textAlign: 'center'
  },
  ghostStrength: {
    fontSize: 20,
    color: '#e04545',
    fontFamily: 'gentium-bold',
    padding: 15,
    textAlign: 'center'
  },
  ghostDescription: {
    fontSize: 20,
    color: '#fdfdfd',
    fontFamily: 'gentium-italic',
    padding: 15,
    textAlign: 'center'
  }, 
  container: {
    flex: 1,
    justifyContent:"space-around",
    backgroundColor: '#5e5e5e',
    padding:10
  },
  evidenceList: {
    margin: 4
  },
  ghostLabel: {
    fontSize: 22,
    padding: 10,
    fontFamily: 'gentium-bold'
  },
  ghostList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-evenly",
    alignContent: "flex-start",
  },
  buttonLabel: {
    borderWidth: 1,
    borderColor: '#c9c9c9',
    borderRadius: 25,
    backgroundColor: '#c8c8c8',
    padding: 3,
    margin: 5
  },
  checkboxText: {
    fontFamily: 'gentium-regular',
    fontSize: 23
  },
  evidenceCheckBoxBackground: {
    backgroundColor: '#fdfdfd',
    borderWidth: 1,
    borderColor: '#c8c8c8',
    borderRadius: 25,
    padding: 15
  }
});