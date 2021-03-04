import {Dimensions, StyleSheet} from 'react-native'

const dimensions = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

export default StyleSheet.create({
    item: {
        backgroundColor: 'transparent',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 12,
        color:"white"
      },
    max: {
        flex: 1,
    },
    maxs: {
        flex: 1,
        position:"relative",
        height:dimensions.height +100
    },
    buttonHolder: {
        height: '50%',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth:1,
        borderColor:'black'
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#0093E9',
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
    },
    fullView: {
        width: dimensions.width,
        height: dimensions.height ,
    },
    remoteContainer: {
        width: '100%',
        height: 550,
        position: 'absolute',
        top: 0
    },
    remote: {
        width: 350,
        height: 550,
        marginHorizontal: 2.5
    },
    noUserText: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        color: '#0093E9',
    },
})