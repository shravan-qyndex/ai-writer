import React from 'react';
```json
{
  "files": [
    {
      "path": "package.json",
      "content": {
        "name": "landing-page",
        "version": "0.1.0",
        "private": true,
        "scripts": {
          "dev": "next dev",
          "build": "next build",
          "start": "next start",
          "lint": "next lint",
          "test": "jest"
        },
        "dependencies": {
          "next": "14.2.3",
          "react": "18.3.1",
          "react-dom": "18.3.1",
          "class-variance-authority": "0.7.0",
          "clsx": "2.1.1",
          "tailwind-merge": "2.3.0",
          "lucide-react": "0.378.0"
        },
        "devDependencies": {
          "typescript": "5.4.5",
          "tailwindcss": "3.4.4",
          "postcss": "8.4.38",
          "autoprefixer": "10.4.19",
          "@types/react": "18.3.3",
          "@types/node": "20.14.2",
          "tailwindcss-animate": "1.0.7",
          "jest": "^29.0.0",
          "jest-environment-jsdom": "^29.0.0"
        }
      }
    },
    {
      "path": "tsconfig.json",
      "content": {
        "compilerOptions": {
          "target": "esnext",
          "lib": ["dom", "dom.iterable", "esnext"],
          "allowJs": true,
          "skipLibCheck": true,
          "strict": true,
          "forceConsistentCasingInFileNames": true,
          "noEmit": true,
          "esModuleInterop": true,
          "module": "esnext",
          "moduleResolution": "node",
          "resolveJsonModule": true,
          "isolatedModules": true,
          "jsx": "preserve",
          "incremental": true
        },
        "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
        "exclude": ["node_modules"]
      }
    },
    {
      "path": "jest.config.js",
      "content": "module.exports = {\n  testEnvironment: \"jest-environment-jsdom\",\n  moduleFileExtensions: [\"js\", \"jsx\", \"ts\", \"tsx\"],\n  testPathIgnorePatterns: [\"<rootDir>/.next/\", \"<rootDir>/node_modules/\"],\n  transform: {\n    \"^.+\\\\.(js|jsx|ts|tsx)$\": \"babel-jest\"\n  },\n  setupFilesAfterEnv: [\"<rootDir>/jest.setup.js\"]\n};"
    },
    {
      "path": "jest.setup.js",
      "content": "import '@testing-library/jest-dom';"
    }
  ],
  "delete_files": []
}
```