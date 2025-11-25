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
![image alt](https://github.com/Sufiyan2302/StreetWatch/blob/5bc7bd60d1669255e1bd24a3fcd5b64e87160a87/Home.png)
![image alt](https://github.com/Sufiyan2302/StreetWatch/blob/686f03f0481840bab9a5c04e22780111837369f9/form.png)
![image alt](https://github.com/Sufiyan2302/StreetWatch/blob/baf0d35f0143d73861865bb6a298f9697ae82f66/reports.png)

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


