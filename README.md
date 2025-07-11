
````markdown
# 📧 Resilient Email Sending Service

A resilient email sending service built with TypeScript, designed to ensure reliable email delivery using retry logic, fallback mechanisms, rate limiting, idempotency, and status tracking.

---

## ✅ Features

- ✅ **Retry Mechanism** with Exponential Backoff
- ✅ **Fallback** Between Two Mock Email Providers
- ✅ **Idempotency** to Prevent Duplicate Sends
- ✅ **Rate Limiting** for Outbound Email Requests
- ✅ **Status Tracking** for Email Attempts
- 🔄 Circuit Breaker (Bonus)
- 📝 Simple Logging
- 📦 Basic Queue System

---

## 🚀 Tech Stack

- **Language:** TypeScript
- **Test Framework:** Jest
- **Node.js** runtime environment
- Minimal external dependencies

---

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kiran-Biradar27/resilient-email-service.git
   cd resilient-email-service
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the service**

   ```bash
   npm run start
   ```

4. **Run tests**

   ```bash
   npm run test
   ```

---

## 📂 Project Structure

```
resilient-email-service/
├── src/
│   ├── EmailService.ts        # Core logic for sending email
│   ├── providers/             # Mock providers A & B
│   ├── types.ts               # Type definitions
│   └── utils/                 # Helper functions
├── tests/
│   └── EmailService.test.ts   # Unit tests
├── package.json
└── README.md
```

---
## 📌 Assumptions

* No real emails are sent; both providers are **mocked**.
* Emails are uniquely identified via a `messageId` for **idempotency**.
* Rate limiting is **basic in-memory** (no Redis or DB).
* Queue and circuit breaker are implemented in a simple, minimalistic way.

---

## 📽️ Demo & Deployment

* **GitHub Repo:** [View here](https://github.com/Kiran-Biradar27/resilient-email-service)
* **Screencast Demo:** (https://drive.google.com/file/d/1cX73yHLZKgNc_v6NIEvdJPtbtlb7-v0R/view?usp=sharing) 🎥

---

## 🧪 Test Coverage

* Mocked providers simulate success and failure scenarios.
* Edge cases like max retries, rate limits, and provider failure are tested.

---

## 📋 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

* This project was built as a part of a take-home assignment for showcasing resilient architecture and clean coding principles.

---
