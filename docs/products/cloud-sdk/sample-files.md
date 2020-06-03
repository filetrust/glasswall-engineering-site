---
title: Safe Demo Test Files
id: sample-files
sidebar_label: Sample Files
---
​
This test set has been created to show how Rebuild API regenerates, clean safe and visually identical files. While these test files are not malicious, the set features Active Content that could be manipulated to launch malware.
​
​
## Complete works of shakespeare.jpg
​
​
This file is a polyglot file (Identifies itself as both a jpg, and a .zip) containing the complete works of William Shakespeare and an image of Shakespeare. To confirm this, rename the file to a .zip file and then unzip using a program like 7zip. You are then able to see 31 files.
If the original .jpeg file is run through Rebuild API, and steps as above repeated, all the files will have been removed, leaving only the .jpg of Shakespeare.  
  
[Download JPG file](https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/Complete+works+of+shakespeare+hidden+zip_Polyglot_image.jpg)
​
​
## JavaScript and embeded files in a PDF
​
​
When the .pdf is opened with Chrome or Acrobat, a pop up appears. This is caused by JavaScript in the .pdf which runs in the background. Rebuild API removes the JavaScript so the pop up no longer appears, delivering a safety regenerated rebuilt file 
  
[Download PDF file](https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/Execute+Java+Script_JS_PDF.pdf)
​
## Macro that opens the calculator app MS Excel
​
​
Opening the file automatically runs a Macro, launching the calculator app. If it does not run automatically, you may need to enable Macros on Excel. Rebuild API removes the Macro leaving you with a sanitised file. Upon opening the new file, the calculator app will no longer launch. 
  
[Download MS Excel 2003 and later file](https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/Opens+calculator+app_macro_MS+excel+2003+and+later.xlsm)  
[Download MS Excel 1997 to 2003 file](https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/Opens+calculator+app_macro_MS+excel+97+2003.xls)
​
​
## Meta Data in a Word document
​
Opening the file, it looks like a benign Word document. The file contains metadata, which can be exploited to send malware. You are able to view the metadata stored in the Word document by going to the Properties section in the File menu. Running the file through Rebuild API removes the metadata. 
  
[Download MS Word 2003 and later file](https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/Contains+Meta+data_Meta+Data_MS+Word+2003+and+later.docx)  
[Download MS word 1997 to 2003 file](https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/Contains+Meta+data_Meta+Data_MS+Word+97+2003v2.doc)
​
​
## Hyperlinks in a PowerPoint
​
The PowerPoint contains a hyperlink that, when followed, will take you to Google. Rebuild API deactivates the hyperlinks. In this case, the URL linked to a benign site, but links to malicious sites would also be neutralised.
  
[Download MS Powerpoint 2003 and later file](https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/External+Hyperlink+to+google_Hyperlink_MS+Powerpoint+2003+and+later.pptx)  
[Download MS Powerpoint 1997 to 2003 file](https://gw-demo-sample-files-eu1.s3-eu-west-1.amazonaws.com/External+Hyperlink+to+google_Hyperlink_MS+Powerpoint+97+2003.ppt)
