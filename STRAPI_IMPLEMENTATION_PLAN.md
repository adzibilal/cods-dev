# Strapi Implementation Plan: CODS Dev

This document outlines the required setup in Strapi CMS to manage the content of the CODS Dev landing page dynamically.

## 1. Collection Types (Dynamic Lists)

### • Works (Project Portfolio)

| Field         | Type                   | Note                                  |
| :------------ | :--------------------- | :------------------------------------ |
| `title`       | Text (Short)           | Project main title                    |
| `slug`        | UID                    | Linked to `title`                     |
| `subtitle`    | Text (Short)           | e.g. "Fintech / Consumer Product"     |
| `description` | Blocks / Rich Text     | Project overview                      |
| `image`       | Media (Multiple)       | Project preview image                 |
| `badges`      | Component (Repeatable) | `label`: String (e.g. "AI", "Modern") |
| `isFeatured`  | Boolean                | Highlight on landing page             |

### • Blog Posts

| Field           | Type               | Note                                |
| :-------------- | :----------------- | :---------------------------------- |
| `title`         | Text (Short)       | Blog title                          |
| `slug`          | UID                | Linked to `title`                   |
| `content`       | Blocks / Rich Text | The full article content            |
| `category`      | Enumeration        | Design, Fintech, UX/UI, Engineering |
| `publishedDate` | Date               | Display date                        |
| `image`         | Media (Single)     | Cover image                         |

### • Testimonials

| Field    | Type           | Note                         |
| :------- | :------------- | :--------------------------- |
| `name`   | Text (Short)   | Client name                  |
| `role`   | Text (Short)   | Title (e.g. "CTO @ Company") |
| `quote`  | Text (Long)    | The testimonial text         |
| `avatar` | Media (Single) | Client photo                 |

### • Team Members

| Field    | Type           | Note                   |
| :------- | :------------- | :--------------------- |
| `name`   | Text (Short)   | Full name              |
| `role`   | Text (Short)   | Job title              |
| `avatar` | Media (Single) | High-res profile image |
| `order`  | Number         | Sorting priority       |

### • FAQ

| Field      | Type         | Note                |
| :--------- | :----------- | :------------------ |
| `question` | Text (Short) | The question        |
| `answer`   | Text (Long)  | The detailed answer |

---

## 2. Single Types (Global Content)

### • Home Page Settings

| Field                | Type         | Note                              |
| :------------------- | :----------- | :-------------------------------- |
| `heroTitle`          | Text (Short) | Main headline text                |
| `heroSubheadline`    | Text (Long)  | Text below hero title             |
| `contactEmail`       | Email        | Destination for contact form      |
| `contactCopywriting` | Text (Long)  | Copy for the Get in Touch section |

---

## 3. Media Library Setup

- **Formats**: Enable responsive imaging in Strapi Settings.
- **Storage**: Recommended to use Cloudinary or AWS S3 provider for production, but local storage is fine for initial setup.

---

## 4. API & Security Configuration

1. **Authentication**:
   - Go to `Settings` > `API Tokens`.
   - Create a `Full Access` or `Read-Only` token named `NUXT_STRAPI_TOKEN`.
2. **Permissions**:
   - Go to `Settings` > `Users & Permissions Plugin` > `Roles`.
   - Select `Public`.
   - Enable `find` and `findOne` for all Collection Types above to allow the Nuxt frontend to fetch data without a user session.

---

## 5. Nuxt Implementation Roadmap

1. **Module Installation**: `npm install @nuxtjs/strapi`.
2. **ENV Setup**: Add `STRAPI_URL` and `STRAPI_TOKEN` to `.env`.
3. **Data Refactor**:
   - Replace local `const works = [...]` with `const { find } = useStrapi();`
   - Use `transform` to map Strapi's nested data structure to our current component props.
