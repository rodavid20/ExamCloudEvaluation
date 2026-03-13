# ExamCloud Evaluation Shortcuts

Ditch the mouse and grade faster on ExamCloud! This extension adds time-saving keyboard shortcuts to your evaluation workflow. Instantly assign predefined marks with number keys, increment/decrement scores by 0.5 using + and -, and quickly navigate through answer scripts. Features on-screen pop-ups to confirm your assigned marks.

## ✨ Features & Keyboard Shortcuts

You can easily navigate through scripts and assign marks directly using your keyboard. A visual pop-up will appear on the screen to instantly confirm the marks you've assigned.

### Navigation
* **`Right Arrow`**: Navigate to the next question
* **`Left Arrow`**: Navigate to the previous question
* **`Space`**: Move to the next paper

### Increment & Decrement
* **`+` (Plus Key)**: Increments the current score by **0.5**. (Automatically caps at the maximum allowed marks for the question).
* **`-` (Minus Key)**: Decrements the current score by **0.5**. (Will not drop below 0).
* *Note: You can press these keys rapidly to quickly add or subtract multiple half-marks.*

### Quick Marking
I’ve added my two cents by mapping the number keys to commonly used mark values. Hitting a key instantly assigns that score:

| Key Pressed | Marks Assigned |
| :---: | :---: |
| **`0`** | 0 |
| **`1`** | 1 |
| **`2`** | 2 |
| **`3`** | 3 |
| **`4`** | 4 |
| **`5`** | 5 |
| **`6`** | 0.5 |
| **`7`** | 1.5 |
| **`8`** | 2.5 |
| **`9`** | 3.5 |

*(Note: The key mappings are defined in `content-script-examcloud.js` if you wish to customize them for different grading scales).*

## 🛠️ Installation Instructions

To install this custom extension manually in Chrome, follow these steps:

1. **Download:** Click on the green **"Code"** button located near the top right of the file list, and select **"Download ZIP"** from the dropdown menu.
2. **Extract:** Locate the downloaded `.zip` file on your computer and **Extract/Unzip** it into a new folder. 
3. **Open Chrome Extensions:** In Google Chrome, go to **Settings** -> **Extensions** (or type `chrome://extensions/` into your address bar).
4. **Enable Developer Mode:** Toggle the **Developer mode** switch in the top right corner of the Extensions page.
5. **Load the Plugin:** Click the **Load unpacked** button that appears in the top left, and select the folder you just extracted.


## 👨‍💻 Authors & Credits

* **Original Author:** Roshan David Jathanna
* **Modifications :** Shanmukharaja M *(Added extended number key mappings).*
  
## 🔧 Troubleshooting

* **Shortcuts aren't responding:** Make sure the ExamCloud webpage has "focus" by clicking anywhere on the background of the page. If they still don't work, just refresh the page (`F5` or `Ctrl + R`).
* **Extension won't load:** Double-check that you extracted/unzipped the `.zip` file first. Chrome cannot load an unpacked extension directly from a zipped file.
* **Updating the extension:** If you make changes to the code or download a newer version, go back to `chrome://extensions/`, click the **Reload** icon (the small circular arrow) on the ExamCloud Shortcuts card, and then refresh your ExamCloud grading tab. 
