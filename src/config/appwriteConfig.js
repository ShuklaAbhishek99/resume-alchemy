export const appwriteConfigs = {
    appwriteEndpointUrl: String(import.meta.env.VITE_APPWRITE_ENDPOINT_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteUsersCollectionId: String(import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID),
    appwriteResumesCollectionId: String(import.meta.env.VITE_APPWRITE_RESUME_COLLECTION_ID),
};
