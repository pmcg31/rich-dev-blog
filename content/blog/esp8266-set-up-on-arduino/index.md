---
title: Set Up the Arduino IDE for ESP8266
date: "2019-11-17"
category: electronics
description: "Guide to installing board definitions and SPIFFS uploader for ESP8266 to Arduino IDE"
---

ESP8266 based development boards offer a very nice microcontroller along with WiFi connectivity. Even better, these boards can be programmed directly from the Arduino IDE, making prototyping super easy, quick, and fun!

These boards have a flash based filesystem connected via Serial Peripheral Interface (SPI) imaginatively named SPIFFS (SPI Flash FileSystem). The Arduino IDE can upload files directly to SPIFFS for later access via sketch by installing the data uploader.

This guide will show how to add both the board definitions and the SPIFFS uploader to the Arduino IDE...let's go!

### Bored? Here's the definition

Two steps are needed to get the board definitions loaded.

First, we need to tell the Arduino IDE about a new place to find definitions from. That place is:

>`http://arduino.esp8266.com/stable/package_esp8266com_index.json`

Open preferences for the Arduino IDE, go to the _Settings_ tab, and add that URL to _Additional Boards Manager URLs_.

Close the preferences (in the affirmative, of course!) and then proceed to the _Tools_ menu. Under _Tools_, go to _Board_-->_Boards Manager..._ and select it. A dialog will appear, type `esp8266` into the search bar at the top. Install `esp8266 by ESP8266 Community` and close the dialog.

When you return to the _Tools_-->_Board_ menu, an ESP8266 section is now available. Select your board from the list and you're all set!

### What about that spiffy file system?

To enable uploading data to the SPIFFS on your board, go to:

>[`https://github.com/esp8266/arduino-esp8266fs-plugin/releases`](https://github.com/esp8266/arduino-esp8266fs-plugin/releases)

Download the latest `ESP8266FS-_ver_.zip` file. At the time of this writing, this was `ESP8266FS-0.4.0.zip`.

Unzip the file. This will give you a folder called `ESP8266FS`. Add this folder to the _tools_ folder (which you may also need to create) under your Arduino folder. On MacOS, the Arduino folder is at `~/Documents/Arduino`. The final path should be `~/Documents/Arduino/tools/ESP8266FS`. For other platforms [click here](https://www.google.com/search?q=arduino+directory).

After restarting the IDE, you should now have an option on the _Tools_ menu called _ESP8266 Sketch Data Upload_. More to come on how to use this!

### Conclusion

That's it! Your Arduino IDE is all set up for ESP8266 boards. Now...what will you do with it?
