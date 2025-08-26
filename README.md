# Nuxt Dance Challenge

A simple Nuxt 4 application demonstrating frontend development with Pinia state management, automated GitHub Pages deployment, and containerized deployment via Helm.

---

## 🌟 Features
- Nuxt 4 + TypeScript
- Pinia for state management
- Single page to display and add dance moves
- Dockerized for container deployment
- Helm chart for Kubernetes deployment
- Automated deployment to GitHub Pages via GitHub Actions

---

## ⚡ Installation & Development

### Clone the repo
```bash
git clone https://github.com/AlenioH/nuxt-challenge.git
cd nuxt-challenge
```

### Install dependencies 
```bash 
npm install
```

### Run development server
```bash 
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build static site
```bash 
npx nuxi generate
```

## 🚀 GitHub Pages Live Demo
[https://alenioh.github.io/nuxt-challenge/](https://alenioh.github.io/nuxt-challenge/)

## 🐳 Docker
### Build Docker image
```bash 
docker build -t alenahasslacher/nuxt-dance-challenge:latest .
```

### Automatic build & push via GitHub Actions
- Every push to main automatically builds and pushes the Docker image to Docker Hub.

- Uses GitHub Actions workflow: .github/workflows/docker.yml

- Requires DOCKER_USERNAME and DOCKER_PASSWORD secrets to be set in GitHub repo.

### Push to Docker Hub
```bash 
docker push alenahasslacher/nuxt-dance-challenge:latest
```

## Helm Deployment
1. Install the chart: 
```bash 
helm install nuxt-app ./helm/nuxt-app
```

2. Upgrade after changes: 
```bash
helm upgrade nuxt-app ./helm/nuxt-app
```

3. Uninstall:
```bash
helm uninstall nuxt-app
```
Make sure the Docker image in values.yaml is correct!
