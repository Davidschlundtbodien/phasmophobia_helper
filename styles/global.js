import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  ghostDetail: {
    flex:1,
    justifyContent: "space-evenly",
    alignItems: 'center',
  },
  ghostName: {
    flex: 0,
    fontSize: 50,
    margin: 10,
    fontFamily: 'gentium-bold',
    color: '#fdfdfd'
  },
  ghostEvidenceList: {
    flex: 0,
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: 'wrap',
    padding: 15
  },  
  ghostEvidence: {
    fontSize: 25,
    fontFamily: 'gentium-regular',
    color: '#fdfdfd',
    padding: 10
  },
  ghostDetailList: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
    borderRadius: 35,
    padding: 10
  },
  headerText: {
    fontSize: 25,
    fontFamily: 'gentium-bold',
    color: '#575757'
  },  
  ghostWeakness: {
    fontSize: 20,
    color: '#2D611F',
    fontFamily: 'gentium-bold',
    padding: 10,
    textAlign: 'center'
  },
  ghostStrength: {
    fontSize: 20,
    color: '#aa1d1d',
    fontFamily: 'gentium-bold',
    padding: 10,
    textAlign: 'center'
  },
  ghostDescription: {
    fontSize: 20,
    color: '#575757',
    fontFamily: 'gentium-italic',
    padding: 10,
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