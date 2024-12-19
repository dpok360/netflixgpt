import { ID, Query } from 'appwrite';
import { createSessionClient } from '../server/appwrite';

export const getUserInfo = async ({ userId }) => {
  try {
    const { database } = await createSessionClient();
    const user = await database.listDocuments(
      import.meta.env.VITE_DB,
      import.meta.env.VITE_USERS_COLLECTION_ID,
      [Query.equal('userId', [userId])]
    );

    if (user.documents.length > 0) {
      return JSON.stringify(user.documents[0]);
    } else {
      throw new Error(`User with ID: ${user.$id} not found`);
    }
  } catch (error) {
    console.error('Error fetching user info', error);
  }
};

export const signIn = async (email, password) => {
  try {
    const { account } = await createSessionClient();

    // Check if there's an active session
    let activeSession = null;
    try {
      activeSession = await account.getSession('current');
    } catch (error) {
      if (error.code === 401) {
        console.warn('No active session found:', error.message);
      } else {
        throw error; // If it's a different error, rethrow it
      }
    }

    if (activeSession) {
      console.log('Active session exists:');
      return activeSession.$id; // Return session ID if session exists
    }

    // If no active session, create a new one
    const newSession = await account.createEmailPasswordSession(
      email,
      password
    );
    if (newSession) {
      console.log('Logged in successfully!');
      return newSession.$id; // Return session ID of the newly created session
    }

    throw new Error('Session creation failed');
  } catch (error) {
    console.error('Error during sign-in:', error.message);
  }
};

export const signUp = async (name, email, password) => {
  try {
    const { account, database } = await createSessionClient();

    if (!account || !database) {
      throw new Error('Account or Database is undefined');
    }
    const newUser = await account.create(ID.unique(), email, password, name);
    if (!newUser) throw new Error('Error creating user');
    const session = await account.createEmailPasswordSession(email, password);
    if (!session) throw new Error('Error creating session');

    return newUser;
  } catch (error) {
    console.error('Error creating user', error);
  }
};

export const logoutAccount = async () => {
  try {
    const sessionClient = await createSessionClient();
    const { account } = sessionClient;

    if (!account) {
      throw new Error('Account object is not initialized properly');
    }
    await account.deleteSession('current');
    console.log('Logged out successfully');
    return true;
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const result = await account.get();

    if (!result || !result.$id) {
      throw new Error('User not found or invalid result');
    }
    const user = await getUserInfo({ userId: result.$id });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const isAuthenticated = async (email) => {
  try {
    const { account } = await createSessionClient();

    const session = await account.getSession('current');
    const currentUserEmail = session.targets[0].identifier;
    return currentUserEmail === email;
  } catch (error) {
    console.error('Error checking session', error.message);
  }
};
