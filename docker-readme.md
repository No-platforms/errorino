# Modern Error Page Docker Image

A lightweight Docker image for serving a beautiful, animated error page.

## Features

- 🎨 Modern dark theme with animations
- 🌙 Floating moon and twinkling stars
- 📱 Fully responsive design
- 🚀 Optimized nginx-based image
- 🔧 Easy configuration via URL parameters

## Quick Start

```bash
docker pull your-username/modern-error-page
docker run -p 80:80 your-username/modern-error-page
```

## Configuration

### URL Parameters

Customize the error message by adding URL parameters:

- `code`: Error code (e.g., 404, 500)
- `message`: Custom error message (URL encoded)

Example:
```
http://localhost/?code=404&message=Page%20Not%20Found
```

## Tags

- `latest`: Latest stable release
- `1.0.0`: Initial release

## Image Details

- Base image: `nginx:alpine`
- Exposed port: 80
- Size: ~25MB

## Support

Report issues on our [GitHub repository](https://github.com/your-username/modern-error-page)

## License

MIT