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

Because this is a custom extension, you will need to load it directly into Chrome manually.

1. **Download the Extension:** Download the `ExamCloudChrome.zip` file from this repository and extract/unzip it into a folder on your computer.
2. **Open Chrome Extensions:** In Google Chrome, click the three dots in the top right corner, then go to **Settings** -> **Extensions** (or just type `chrome://extensions/` into your address bar).
3. **Enable Developer Mode:** Toggle the **Developer mode** switch in the top right corner of the Extensions page.
4. **Load the Plugin:** Click the **Load unpacked** button that appears in the top left, and select the folder where you unzipped the extension files.


## 👨‍💻 Authors & Credits

* **Original Author:** Roshan David Jathanna
* **Modifications :** Shanmukharaja M *(Added extended number key mappings).*
  
## 🔧 Troubleshooting

* **Shortcuts aren't responding:** Make sure the ExamCloud webpage has "focus" by clicking anywhere on the background of the page. If they still don't work, just refresh the page (`F5` or `Ctrl + R`).
* **Extension won't load:** Double-check that you extracted/unzipped the `.zip` file first. Chrome cannot load an unpacked extension directly from a zipped file.
* **Updating the extension:** If you make changes to the code or download a newer version, go back to `chrome://extensions/`, click the **Reload** icon (the small circular arrow) on the ExamCloud Shortcuts card, and then refresh your ExamCloud grading tab. 
