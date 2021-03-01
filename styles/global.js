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
    color: '#fdfdfd'
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
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
    borderRadius: 20

  },
  ghostWeakness: {
    fontSize: 20,
    color: '#2D611F',
    fontFamily: 'gentium-bold',
    padding: 15,
    textAlign: 'center'
  },
  ghostStrength: {
    fontSize: 20,
    color: '#aa1d1d',
    fontFamily: 'gentium-bold',
    padding: 15,
    textAlign: 'center'
  },
  ghostDescription: {
    fontSize: 20,
    color: '#575757',
    fontFamily: 'gentium-italic',
    padding: 15,
    textAlign: 'center'
  }, 
  container: {
    flex: 1,
    justifyContent:"space-around",
    backgroundColor: '#575757',
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
    borderColor: '#575757',
    borderRadius: 25,
    backgroundColor: '#fdfdfd',
    padding: 3,
    margin: 5
  },
  checkboxText: {
    fontFamily: 'gentium-regular',
    color: '#575757',
    fontSize: 23
  },
  evidenceCheckBoxBackground: {
    backgroundColor: '#fdfdfd',
    borderWidth: 1,
    borderColor: '#575757',
    borderRadius: 25,
    padding: 15
  }
});