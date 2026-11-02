# ⚡ AWS Tech Superpower Portfolio & Live Cloud Simulator

> **AWS Student Builder Challenge 2026 Submission**  
> *Track: Build Your Tech Superpower*  
> *Participant: Priyag (PRIYAGDEV)*  
> *Cloud Deployment: AWS Amplify Hosting*

[![AWS Amplify Hosting](https://img.shields.io/badge/Deploy-AWS_Amplify-FF9900?logo=aws-amplify&logoColor=white)](https://aws.amazon.com/amplify/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-CSS_v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![AWS Region](https://img.shields.io/badge/AWS_Region-us--east--1-232F3E?logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)

---

## 🌟 The "Tech Superpower" Interactive Experience

This developer portfolio showcases my core tech superpower: **Architecting Resilient, Event-Driven Serverless Cloud Systems & Autonomous AI at Hyperscale**.

To bring this superpower to life, the portfolio features an **interactive, real-time AWS Cloud Architecture & Stress Simulator**:

### 1. 🚀 Live AWS Cloud Stress-Test Simulator
* **Interactive Architecture Map:** Real-time visual topology connecting **Global Edge Clients** ➔ **AWS Amplify Hosting** & **Amazon API Gateway** ➔ **AWS Lambda** ➔ **Amazon DynamoDB** & **Amazon Bedrock**.
* **Dynamic Traffic Load Engine:** Slide from 500 RPS up to 100,000+ RPS and watch packet particles stream between nodes in real time.
* **Surge Scenarios:**
  * **85K DDoS Attack Simulation:** Triggers AWS WAF rate-limiting and CloudFront edge shield (0% drop rate).
  * **Bedrock AI Reasoning Surge:** Activates foundation model multi-turn inference pipelines.
* **Live Telemetry Meters:** Real-time P99 latency (ms), autoscaled Lambda concurrency, edge cache hit ratio, and pay-as-you-go monthly cost modeling.
* **Superpower Achievement:** Unlocks a verified "Cloud Scalability Master" confetti badge upon handling 70K+ RPS without packet loss.

### 2. 💻 Embedded Interactive Cloud-Shell CLI
* A functional retro/modern shell running directly in the browser.
* Available commands:
  * `superpower` - Inspect tech superpower specs and architectural capabilities.
  * `skills` - Detailed matrix of frontend, backend, and cloud proficiencies.
  * `projects` - Case studies with live metrics and architectural deep dives.
  * `certifications` - AWS certification pathway (Cloud Practitioner & Solutions Architect).
  * `whoami` - Candidate background, values, and availability.
  * `sudo hire-me` - Recruiter fast-track easter egg with confetti celebration.
  * `clear` - Clean terminal output.

---

## 🏗️ Architecture & AWS Services

| Service | Role in Portfolio |
| :--- | :--- |
| **AWS Amplify Hosting** | Global CDN deployment, CI/CD automated Git builds, custom domains, and SSL |
| **Amazon CloudFront** | Low-latency edge caching and DDoS mitigation |
| **Amazon Route 53** | Global DNS routing and health checking |
| **Amazon Bedrock** | Foundation model inference and autonomous agent integration (featured in projects) |
| **AWS Lambda** | Serverless compute execution logic |
| **Amazon DynamoDB** | Single-digit millisecond persistent key-value / document data store |
| **Agent Toolkit for AWS** | AI-assisted development, continuous alignment with official AWS best practices |

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone repository
git clone https://github.com/<your-username>/aws-builder-portfolio.git
cd aws-builder-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production
npm run build
```

---

## ☁️ Deploying to AWS Amplify Hosting

This repository is pre-configured with [`amplify.yml`](amplify.yml) for 1-click CI/CD deployment:

1. Push your code to a GitHub repository:
   ```bash
   git remote add origin https://github.com/<your-username>/aws-builder-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Open the [AWS Amplify Console](https://console.aws.amazon.com/amplify).
3. Select **"Deploy an app"** > **GitHub** and authorize access.
4. Pick this repository and branch `main`.
5. Amplify will auto-detect the Vite build settings from `amplify.yml`:
   * Build command: `npm run build`
   * Output directory: `dist`
6. Click **Save and Deploy**. Your live URL will be ready in ~2 minutes!

---

## 👨‍💻 Author

**Priyag (PRIYAGDEV)**  
*AWS Student Builder | Computer Science Student*  
* [GitHub](https://github.com) • [LinkedIn](https://linkedin.com)
