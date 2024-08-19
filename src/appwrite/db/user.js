import { Client, Databases, ID } from "appwrite";
import { appwriteConfigs } from "@/config/appwriteConfig";

console.log(appwriteConfigs);

class UserService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(appwriteConfigs.appwriteEndpointUrl)
            .setProject(appwriteConfigs.appwriteProjectId);

        this.databases = new Databases(this.client);
    }

    async createUser(userId) {
        try {
            return await this.databases.createDocument(
                appwriteConfigs.appwriteDatabaseId,
                appwriteConfigs.appwriteUsersCollectionId,
                ID.unique(),
                {
                    userId,
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: createUser :: error ", error);
        }
    }

    async getUsers(queries = []) {
        try {
            return await this.databases.listDocuments(
                appwriteConfigs.appwriteDatabaseId,
                appwriteConfigs.appwriteUsersCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite Service :: getUsers :: error ", error);
        }
    }

    async updateUser(docId, data) {
        try {
            return this.databases.updateDocument(
                appwriteConfigs.appwriteDatabaseId,
                appwriteConfigs.appwriteUsersCollectionId,
                docId,
                {
                    ...data,
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: updateUser :: error ", error);
        }
    }

    async deleteUser(docId) {
        try {
            return this.databases.deleteDocument(
                appwriteConfigs.appwriteDatabaseId,
                appwriteConfigs.appwriteUsersCollectionId,
                docId
            );
        } catch (error) {
            console.log("Appwrite Service :: deleteUser :: error ", error);
        }
    }
}

const userService = new UserService();

export default userService;
