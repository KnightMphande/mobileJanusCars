// src/screens/styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignSelf: 'center',
        marginVertical: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginVertical: 10,
        borderRadius: 5,
    },

    title: {
        textAlign: 'center',
        marginTop: 3
    },

    alignLeft: {
        textAlign: 'left'
    },

    titleText: {
        fontWeight: '600'
    },

    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#16a34a', // Active tab color
        padding: 10,
    },
    
    inactiveTab: {
        padding: 10,
    },
    
    tabText: {
        fontSize: 16,
    },
    
    tabContent: {
        padding: 0,
    },
    
    tabTitle: {
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    
});
