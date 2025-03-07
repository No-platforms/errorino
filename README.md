# Modern Error Page

A beautiful, animated error page built with React and Tailwind CSS. This project provides a modern, dark-themed error page with animated elements like a floating moon and twinkling stars.

![Error Page Preview](Screenshot.jpeg)

## Features

- 🌙 Animated moon and twinkling stars
- 🎨 Modern dark theme with gradient effects
- 💫 Smooth animations and transitions
- 🔄 Dynamic error messages via URL parameters
- 🎯 Responsive design
- 🐳 Docker support
- 🔄 Automated builds with GitHub Actions

## Usage

### URL Parameters

The error page accepts two URL parameters:

- `code`: The error code to display (e.g., 404, 500)
- `message`: The error message (URL encoded)

Example:
```
http://your-domain/?code=404&message=Page%20Not%20Found
```

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/your-username/modern-error-page.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Docker

Run with Docker:
```bash
docker pull your-username/modern-error-page
docker run -p 80:80 your-username/modern-error-page
```

## Environment Setup

### GitHub Actions

To enable automatic Docker builds:

1. Add these secrets to your GitHub repository:
   - `DOCKER_USERNAME`: Your Docker Hub username
   - `DOCKER_PASSWORD`: Your Docker Hub access token

2. Push to the main branch to trigger the build

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- Docker
- GitHub Actions

## License

MIT