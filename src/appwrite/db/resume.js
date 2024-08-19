import { Client, Databases, ID } from "appwrite";
import { appwriteConfigs } from "@/config/appwriteConfig";

class ResumeService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(appwriteConfigs.appwriteEndpointUrl)
            .setProject(appwriteConfigs.appwriteProjectId);

        this.databases = new Databases(this.client);
    }

    async createResume(userId, resumeTitle, industry) {
        try {
            return await this.databases.createDocument(
                appwriteConfigs.appwriteDatabaseId,
                appwriteConfigs.appwriteResumesCollectionId,
                ID.unique(),
                {
                    userId,
                    resumeTitle,
                    industry,
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: createResume :: error ", error);
        }
    }

    async getResumes(queries) {
        try {
            return await this.databases.listDocuments(
                appwriteConfigs.appwriteDatabaseId,
                appwriteConfigs.appwriteResumesCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite Service :: createResume :: error ", error);
        }
    }

    async updateResume(docId, data) {
        try {
            return await this.databases.updateDocument(
                appwriteConfigs.appwriteDatabaseId,
                appwriteConfigs.appwriteResumesCollectionId,
                docId,
                {
                    ...data,
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: createResume :: error ", error);
        }
    }

    async deleteResume(docId) {
        try {
            return await this.databases.deleteDocument(
                appwriteConfigs.appwriteDatabaseId,
                appwriteConfigs.appwriteResumesCollectionId,
                docId
            );
        } catch (error) {
            console.log("Appwrite Service :: createResume :: error ", error);
        }
    }
}

const resumeService = new ResumeService();

export default resumeService;
