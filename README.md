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
git clone https://github.com/No-platforms/errorino.git
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
docker pull yiiman/errorino
docker run -p 80:80 yiiman/errorino
```



## License

[Apache License](LICENSE)