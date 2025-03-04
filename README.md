# QR Code Generator

## 📌 About

This is a simple Node.js application that generates a **QR code** from a user-provided URL and saves both the QR code image and the URL in a text file.

## 🚀 Features

- **User Input Prompt**: Takes a URL as input using `inquirer`.
- **QR Code Generation**: Creates a QR code using `qr-image`.
- **File Storage**: Saves the QR code as a PNG file and the URL in a text file.
- **Automatic File Naming**: Uses timestamps to prevent file overwriting.

## 📂 Project Structure

```
📦 QR-Code-Generator
 ┣ 📜 index.js          # Main application file
 ┣ 📜 package.json      # Project dependencies
 ┗ 📜 README.md         # Documentation
```

## 🛠 Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/mina-y-khalil/QR-Code-Generator.git
cd QR-Code-Generator
```

### 2️⃣ Install Dependencies

```sh
npm install
```

## 🎯 Usage

### Run the Application

```sh
node index.js
```

### Enter a URL when prompted

```
? Type in your URL: https://example.com
```

### Output

- The QR code is saved as **`qr_<timestamp>.png`**
- The URL is saved in **`URL_<timestamp>.txt`**

## 🖼 Example Output

After running the script, the generated files might look like:

```
qr_1709324248167.png
URL_1709324248167.txt
```

## 🛠 Dependencies

This project uses the following Node.js packages:

- [inquirer](https://www.npmjs.com/package/inquirer) - For user input
- [qr-image](https://www.npmjs.com/package/qr-image) - For QR code generation
- [fs](https://nodejs.org/api/fs.html) - To handle file operations

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature-name`)
3. **Commit your changes** (`git commit -m 'Add new feature'`)
4. **Push to GitHub** (`git push origin feature-name`)
5. **Create a Pull Request**

## 📜 License

This project is licensed under the **MIT License**.

## 💡 Author

Developed by [Mina Khalil](https://github.com/mina-y-khalil). Connect on [LinkedIn](https://www.linkedin.com/in/mina-khalil-9159a795/).

---

⭐ **Star this repository** if you found it helpful!
