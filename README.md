# Resume Alchemy

## Table of Contents

-   [Introduction](#introduction)
-   [Features](#features)
-   [Project Links](#project-video)
-   [Project Video](#project-video)
-   [Tech Stack](#tech-stack)
-   [Installation](#installation)
-   [Database Design](#database-design)
-   [Usage](#usage)
-   [Environment Variables](#environment-variables)
-   [Contributing](#contributing)
-   [Contact](#contact)

## Introduction

**Resume Alchemy** is a powerful resume-building web app that allows users to create, update, and manage their resumes with ease. It features an AI-powered summary generation tool, resizable form sections, and instant resume previews. Users can share and download their resumes directly from the app, making it a comprehensive tool for job seekers.

## Features

-   **CRUD Operations on Resumes:** Users can create, read, update, and delete resumes through an intuitive dashboard.
-   **AI-Powered Summaries:** Generate professional summaries for personal statements and work experiences based on job titles and positions held with Gemini API.
-   **Resizable Form and Preview Sections:** Customize the layout by resizing the form and resume preview panes according to your preference.
-   **Instant Preview:** As users fill out the form, the resume preview updates in real-time.
-   **Share and Download:** Users can easily share and download their completed resumes with dedicated buttons.
-   **Responsive Design:** The app is fully responsive, providing a seamless experience on both desktop and mobile devices.

## Project Links

[Live Project](https://resumeai.abhishekshukla.xyz/)

## Project Video

Click the below preview to watch the demo video

[![Video Preview](https://img.youtube.com/vi/vyG7L1xVLts/0.jpg)](https://www.youtube.com/watch?v=vyG7L1xVLts)

&nbsp;
Or click here: [Watch](https://www.youtube.com/watch?v=vyG7L1xVLts)

## Tech Stack

-   **Frontend:** React, Tailwind CSS, React Router, Redux Toolkit, React Hook Form, Shadcn
-   **Backend:** Appwrite
-   **Tools:** Vite, Clerk, ESLint

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ShuklaAbhishek99/resume-alchemy
    cd resume-alchemy
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    - Create a `.env` file in the root directory and add the necessary environment variables as outlined in the [Environment Variables](#environment-variables) section.

4. **Start the development server:**

    ```bash
    npm run dev
    ```

## Database Design

The project uses Appwrite for backend services, including user authentication and data storage. Below is an overview of the database collections used in the project:

| Collection Name | Description                                                        | Fields                                                                       |
| --------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `users`         | Stores user information and preferences.                           | `id`, `name`, `username`, `email`, etc.                                      |
| `resumes`       | Stores resume details including personal information and sections. | `id`, `user_id`, `personal_details`, `summary`, `experience`, `skills`, etc. |

## Usage

After installation, you can use the following commands to interact with the project:

-   **Start the server:**

    ```bash
    npm run dev
    ```

-   **Build for production:**

    ```bash
    npm run build
    ```

-   **Preview the build:**

    ```bash
    npm run preview
    ```

## Environment Variables

The following environment variables are required for the project:

```bash
# clerk
VITE_CLERK_PUBLISHABLE_KEY =

# google gemini
VITE_GOOGLE_AI_API_KEY =

# appwrite
VITE_APPWRITE_ENDPOINT_URL =
VITE_APPWRITE_PROJECT_ID =
VITE_APPWRITE_DATABASE_ID =
VITE_APPWRITE_USERS_COLLECTION_ID =
VITE_APPWRITE_RESUME_COLLECTION_ID =
```

## Contributing

I am not accepting contributions at the moment.

## Contact

For any questions or feedback, feel free to contact me:

-   **Email:** abhishekworks99@gmail.com
-   **LinkedIn:** [Abhishek Shukla](https://www.linkedin.com/in/abhishek-shukla99/)
-   **Twitter:** [@abhishekshukl99](https://x.com/abhishekshukl99)

---
