# 📰 Browser Automation – News Scraper & Dashboard

A browser automation project that scrapes news headlines from public websites and displays them in a clean, interactive frontend dashboard. Built using Playwright and vanilla web technologies, this project demonstrates real-world automation, data extraction, and frontend integration without paid APIs or AI services.

---

## 🚀 Project Overview

This project automatically opens a real browser, navigates to a news website, extracts headline data, saves it locally as structured JSON, and renders it in a frontend dashboard.

It demonstrates:
- Browser automation
- Web scraping
- Structured data storage
- Frontend + backend integration

---

## 🛠️ Tech Stack

Automation / Backend:
- Node.js
- TypeScript
- Playwright

Frontend:
- HTML
- CSS
- Vanilla JavaScript

Storage:
- Local JSON file

---

## 📂 Project Structure

my-stagehand-app/
│
├── index.ts          # Browser automation & scraping logic
├── index.html        # Frontend dashboard
├── headlines.json    # Scraped news data
├── page.png          # Screenshot taken by automation
├── package.json
├── tsconfig.json
├── README.md
└── node_modules/

---

## ⚙️ How It Works (Step-by-Step)

1. Automation Script (index.ts)
- Launches a real browser using Playwright
- Navigates to a public news website
- Extracts headline titles and article links
- Saves the data into headlines.json
- Takes a screenshot (page.png)

2. Frontend Dashboard (index.html)
- Loads headlines.json
- Displays headlines as clickable links
- Supports search, filtering, and dark mode
- Runs locally without a backend server

---

## ✨ Features

- Real browser automation
- Dynamic content handling
- Structured JSON output
- Frontend dashboard with search and dark mode
- Screenshot capture
- No paid APIs required

---

## ▶️ How to Run the Project

Install dependencies:
npm install

Run the automation:
npx tsx index.ts

Open the dashboard:
Open index.html directly in your browser.

---

## 📸 Output

- headlines.json – extracted news data
- page.png – screenshot of the scraped page
- Interactive frontend dashboard

---

## 🎯 Use Cases

- News aggregation
- Automation learning
- Web scraping practice
- Portfolio project
- Monitoring public websites

---

## 🔮 Possible Enhancements

- Scrape multiple news sources
- Add pagination handling
- Auto-refresh data
- Deploy frontend via GitHub Pages
- Add categories or tags

---

## 📌 Why This Project Matters

This project demonstrates practical browser automation and scraping skills commonly used in real-world data pipelines and monitoring systems. It focuses on fundamentals, reliability, and clarity rather than paid services or shortcuts.

---

## 📄 License

Open-source. Free to use for learning and personal projects.
