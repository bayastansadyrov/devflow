<div align="center">
  <br />
  <h1 align="center">DevOverflow</h1>
  <p align="center">
    A full-stack, community-driven Q&A platform built with Next.js, inspired by StackOverflow.
  </p>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-ShadCN_UI-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000" alt="shadcnui" />
    <img src="https://img.shields.io/badge/-Gemini_API-black?style=for-the-badge&logoColor=white&logo=googlegemini&color=4285F4" alt="Gemini API" />
  </div>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

DevOverflow is a full-stack, community-driven Q&A platform inspired by StackOverflow, enhanced with AI-powered answers, gamification, recommendations, and more.

This project utilizes the latest features of **Next.js 14** (App Router), including **Server Actions**, advanced caching and revalidation strategies, and various rendering techniques (SSG, ISR, SSR).

It uses **MongoDB** as its database, **NextAuth (Auth.js)** for authentication (supporting Email/Password, GitHub, and Google), and features a sleek UI built with **TailwindCSS** and **ShadCN UI**.

Devoverflow allows developers to ask questions, post answers, leverage AI for responses, vote on content, save questions to collections, discover jobs, and explore recommended topics.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS & ShadCN UI
- **Database**: MongoDB (Mongoose)
- **Authentication**: NextAuth (Auth.js)
- **Form Management**: React Hook Form
- **Schema Validation**: Zod
- **AI Integration**: Google (Gemini API)
- **Rich Text Editor**: TinyMCE
- **External Data**: Rapid API (for Job searching)

## <a name="features">🔋 Features</a>

👉 **Authentication**: Secure sign-in with NextAuth, supporting Email/Password, Google, and GitHub.

👉 **Home Page**: Displays questions with filters, search, and pagination for easy navigation.

👉 **Recommendations**: Personalized, tag-based suggestions on the home page.

👉 **Complex Layout**: Organized layout with popular questions and tags in view.

👉 **Question Details**: View questions with rich content, including images and code blocks.

👉 **Voting**: Upvote/downvote on questions and answers.

👉 **View Counter**: Tracks the number of views for each question.

👉 **Bookmarking**: Save questions to "Collections" for quick access later.

👉 **Answer Posting**: MDX editor (TinyMCE) for submitting answers.

👉 **AI Answer Generation**: Get AI-generated responses to questions (via Google Gemini API).

👉 **Answer Filtering**: Sort answers by newest or most-voted, with pagination.

👉 **Collections**: Organized saved questions with filters, search, and pagination.

👉 **Community**: Browse all users with search, filters, and pagination.

👉 **Profile**: View user info, badges (gamification), and engagement history.

👉 **Job Finder**: Discover jobs with filters and search (Rapid API integration).

👉 **Tags Page**: List of all tags with question counts, filters, and pagination.

👉 **Tag Details**: View questions by tag with search and pagination.

👉 **Ask a Question**: Simple interface for posting new questions.

👉 **Edit & Delete**: Update or remove questions and answers with validation and authorization.

👉 **Global Search**: Find content across questions, users, tags, and more.

👉 **Responsive Design**: Fully optimized for a seamless experience on desktops, tablets, and mobile devices.

👉 **High Performance**: Fast loading and smooth interactions via server-side rendering and caching.

...and many more, including clean code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v18.17 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone [https://github.com/bayastansadyrov/devflow.git](https://github.com/bayastansadyrov/devflow.git)
cd devflow
```
