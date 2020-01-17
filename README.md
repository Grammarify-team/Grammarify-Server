# Grammarify-Server
Back-end/Server Side for Grammarify app

## Grammarify API Documentation
Base URL : **http://api-grammarify.nafies.tech**

---

  ### **Upload File**
  ----
  Upload file image or pdf to Server Storage, and return link

* **URL**

   /upload

* **Method:**

  POST

* **req.params:**

  None

* **req.file**

  file.png / file.img / file.pdf    
  *Receive file pdf ,  jpg, etc contains text*

* **Success Response :**    
  Code : 200    
  Content : 
  ```javascript
  {
    "status": 200,
    "message": "Your file is successfully uploaded",
    "link": "https://storage.googleapis.com/grammarify-project/1579252422801Contoh-Teks-Ulasan.png"
  }           
  ```
* **Error Response :**    
  Code : 500 / 400    
  Content : `Cannot read property 'cloudStoragePublicUrl' of undefined`

-----

### **Parse File**
  ----
  Parse file image or pdf to text and check grammar.

* **URL**

   /ocr/parse

* **Method:**

  POST

* **req.params:**

  None

* **req.body:**

  url : __http://image.com/img.png__

* **Success Response :**    
  Code : 200    
  Content : Result from grammar check of the text. Check success response in Check Grammar route

* **Error Response :**    
  Code : 500    
  Content : `{"msg": {}}`

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

* **Success Response :**    
  Code : 200    
  Content : Example output with input I has two apple
  ```javascript
  {
    "software": {
        "name": "GrammarBot",
        "version": "4.3.1",
        "apiVersion": 1,
        "premium": false,
        "premiumHint": "You might be missing errors only the Premium version can find. Upgrade to see what you're missing.",
        "status": ""
    },
    "warnings": {
        "incompleteResults": false
    },
    "language": {
        "name": "English (US)",
        "code": "en-US",
        "detectedLanguage": {
            "name": "English (US)",
            "code": "en-US"
        }
    },
    "matches": [
        {
            "message": "The pronoun 'I' must be used with a non-third-person form of a verb: \"have\", \"haven\"",
            "shortMessage": "Grammatical problem: agreement error",
            "replacements": [
                {
                    "value": "have"
                },
                {
                    "value": "haven"
                }
            ],
            "offset": 2,
            "length": 3,
            "context": {
                "text": "I has two apple",
                "offset": 2,
                "length": 3
            },
            "sentence": "I has two apple",
            "type": {
                "typeName": "Other"
            },
            "rule": {
                "id": "NON3PRS_VERB",
                "subId": "1",
                "description": "Agreement error: Third person verb with a non-third person pronoun",
                "issueType": "grammar",
                "category": {
                    "id": "GRAMMAR",
                    "name": "Grammar"
                }
            }
        },
        {
            "message": "Statistics suggests that 'apples' might be the correct word here. Please check.",
            "shortMessage": "",
            "replacements": [
                {
                    "value": "apples"
                }
            ],
            "offset": 10,
            "length": 5,
            "context": {
                "text": "I has two apple",
                "offset": 10,
                "length": 5
            },
            "sentence": "I has two apple",
            "type": {
                "typeName": "Other"
            },
            "rule": {
                "id": "CONFUSION_RULE",
                "description": "Statistically detect wrong use of words that are easily confused",
                "issueType": "non-conformance",
                "category": {
                    "id": "TYPOS",
                    "name": "Possible Typo"
                }
            }
        }
    ]
  }
  ```

