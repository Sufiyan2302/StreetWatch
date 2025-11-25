# 🚨 StreetWatch — Community Incident Reporting App

A modern React + Firebase application that allows users to report issues, upload images, share location, and manage reports through an admin dashboard.

---

## 🚀 Features

### **📍 Report Creation**

* Submit incident reports instantly
* Add **description**, **image**, **timestamp**, and **location (GeoPoint)**
* Clean UI with dark neon theme

### **🗄️ Firebase Integration**

* Firestore for storing reports
* Support for GeoPoint
* Firebase Storage (optional if needed)
* Real-time fetching and updates

### **🛠️ Admin Panel**

* Secure admin login
* View all reports
* Delete or manage reports
* Responsive monitoring dashboard

---

## 🧰 Tech Stack

| Technology             | Purpose                |
| ---------------------- | ---------------------- |
| **ReactJS**            | Frontend UI            |
| **React Router**       | Navigation & routing   |
| **Firebase Firestore** | Database for reports   |
| **Firebase Auth**      | Admin authentication   |
| **Firebase Storage**   | Optional image uploads |
| **CSS / Custom Theme** | Dark mode UI           |

---

## 📸 Screenshots (Optional)

Add screenshots like:

```
## Screenshots

### Home Page
![Home](https://raw.githubusercontent.com/Sufiyan2302/StreetWatch/main/Home.png)

### Form Page
![Form](https://raw.githubusercontent.com/Sufiyan2302/StreetWatch/main/form.png)

### Reports Page
![Reports](https://raw.githubusercontent.com/Sufiyan2302/StreetWatch/main/reports.png)



```

---

## 📂 Project Structure

```
StreetWatch/
│── src/
│   ├── components/
│   │   ├── CreateReport.jsx
│   │   ├── RecentReport.jsx
│   │   ├── AdminLogin.jsx
│   │   └── Home.jsx
│   ├── firebase.js
│   ├── App.jsx
│   └── index.js
│
└── public/
```

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the repo**

```bash
git clone https://github.com/Sufiyan2302/streetwatch.git
cd streetwatch
```

### **2️⃣ Install dependencies**

```bash
npm install react-router-dom
```

### **3️⃣ Add Firebase config**

Create a file:

```
src/firebase.js
```

Paste your Firebase configuration:

```js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_MSG",
  appId: "YOUR_APP_ID"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

---

## ▶️ Run the App

```bash
npm run dev
```

---

## 🧪 How Reports Work

Each report is stored as a Firestore document:

```json
{
  "title": "Street Light Not Working",
  "description": "The pole near sector 12 has no light.",
  "imageUrl": "optional",
  "location": {
     "latitude": 19.07,
     "longitude": 72.87
  },
  "createdAt": "Timestamp"
}
```

---

## 💡 Future Enhancements

* Push notifications for new reports
* Map view (Google Maps API)
* AI-powered content classification
* Role-based admin system

---

## 🤝 Contributing

Pull requests are welcome! Please open an issue first for significant changes.

---

## 📄 License

This project is licensed under the MIT License.

---


