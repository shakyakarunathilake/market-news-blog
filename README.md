# Blott Studio - Market News App

A modern market news application built with Next.js that delivers real-time financial news and market updates. The app features a clean, responsive interface for browsing the latest market news stories.

## 🚀 Features

- **Real-time Market News**: Fetches the latest financial news from Finnhub API
- **Responsive Design**: Built with Tailwind CSS for optimal viewing on all devices
- **Modern UI Components**: Atomic design pattern with reusable components
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Toast Notifications**: Interactive feedback system for user actions
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Built with Next.js 15 and React 19

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Runtime**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **API**: Finnhub Financial Data API
- **Code Quality**: ESLint, Prettier
- **Performance**: Turbopack for fast development builds

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/market-news/   # API routes for fetching news
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components (Atomic Design)
│   ├── atoms/            # Basic UI elements
│   └── molecules/        # Composite components
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
├── config/               # Configuration files
└── context/              # React Context providers
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Finnhub API key (get one at [finnhub.io](https://finnhub.io))

### Installation

1. Clone the repository:

```bash
git clone https://github.com/shakyakarunathilake/blott-studio.git
cd blott-studio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:

```env
FINNHUB_API_KEY=your_finnhub_api_key_here
FINNHUB_BASE_URL=your_finnhub_base_url
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code analysis
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🔧 Configuration

The app uses various configuration files:

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration

## 📱 Components

The application follows atomic design principles:

### Atoms

- `ErrorHandler` - Error display component
- `RedirectButton` - Navigation button component
- `ToastMessage` - Notification component

### Molecules

- `ContentWrapper` - Page layout wrapper
- `NewsItem` - Individual news article component

## 🌐 API Integration

The app integrates with the Finnhub API to fetch real-time market news. The API route is located at `/api/market-news` and handles:

- Fetching general market news
- Error handling and response formatting
- Caching and revalidation strategies

## 🎨 Styling

This project uses Tailwind CSS 4 for styling with:

- Responsive design utilities
- Custom color schemes
- Component-based styling approach
- PostCSS for CSS processing

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a personal project. If you'd like to contribute, please reach out to discuss potential improvements.

## 📧 Contact

For questions or inquiries about this project, please contact the repository owner.
