import AsyncStorage from '@react-native-async-storage/async-storage';

const USERNAME_KEY = 'thousand-words-auth-user';
const PASSWORD_KEY = 'thousand-words-auth-password';

// Used to simulate authentication.
const authenticate = async(username:string, password:string) => {
    try {
        await AsyncStorage.setItem(USERNAME_KEY, username);
        await AsyncStorage.setItem(PASSWORD_KEY, password);
    } catch (e)
    {
        console.error(e);
    }
}

const logout = async () => {
    try {
        await AsyncStorage.removeItem(USERNAME_KEY);
        await AsyncStorage.removeItem(PASSWORD_KEY);
    } catch (e)
    {
        console.error(e);
    }
}

const isAuthenticated = async () => {
    try {
        const username = await AsyncStorage.getItem(USERNAME_KEY); 

        return !!username;
    } catch (e){
        console.error(e);
    }
}

export {logout, authenticate, isAuthenticated};
