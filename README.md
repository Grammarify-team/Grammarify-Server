# Grammarify-Server
Back-end/Server Side for Grammarify app

## Grammarify API Documentation
Base URL : **http://api-grammarify.nafies.tech**

---

  ### **Upload File**
  ----
  Upload file image or pdf to Server Storage

* **URL**

   /upload

* **Method:**

  POST

* **req.params:**

  None

* **req.file**

  file.png / file.img / file.pdf    
  *Receive file pdf ,  jpg, etc contains text*

-----

### **Parse File**
  ----
  Parse file image or pdf to Server Storage

* **URL**

   /ocr/parse

* **Method:**

  POST

* **req.params:**

  None

* **req.body:**

  url : __http://image.com/img.png__

-----

### **Check Grammar**
  ----
  Check grammar from text input

* **URL**

   /grammar/:text

* **Method:**

  GET

* **req.params :**

  text : *text that would be checked the grammar*

* **req.body :**

  None