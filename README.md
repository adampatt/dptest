## Getting Started


## Prerequisites

- Node.js (v18 or higher)
- npm

## Getting Started

### Backend Setup

1. Navigate to the server directory:

First install the dependencies, then run the server:

```bash
cd server
npm install
npm run dev
```
### Frontend Setup

2. Start the client:

```bash
cd client
npm install
npm run dev
```

The server will now be running on port :4000 and the client running at [http://localhost:3000](http://localhost:3000)

### Services used:
- Next.js
- TypeScript
- Tailwind CSS
- Zod
- Fastify

### Tradeoffs: 
I stored the images for the products in the public folder. While I considered using an external service for image storage and retrieval, it felt unnecessary for the size and complexity of this project.

Initially, I planned to use react-query for data fetching but ultimately decided against it, as the project’s requirements did not require the added complexity.
 
For icons, I used Heroicons directly in the file rather than installing the package. This approach saved memory and was more straightforward given the limited use of icons in the project. If the project required the use of icons in many file, I would have installed an icon package.

Finally, I considered sharing Zod types for products between the client and server. Although this would improve type consistency, I chose to skip this step to save time.