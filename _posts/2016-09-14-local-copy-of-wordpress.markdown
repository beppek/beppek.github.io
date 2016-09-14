---
layout: post
title:  "How to set up Local Copy of Live WordPress Site"
date:   2016-09-14 12:00:00
image:
    feature: wp2.jpg
category: WordPress
tags: WordPress, XAMPP, MySQL, localhost, Windows
comments: true
---
Today as I was experiencing some down time between assignments I decided to get started with a project I've been planning all summer: learn how to bring a copy of my live WordPress sites to my local computer for quiet development without disrupting the live version.

I figured I might as well document the process for others to follow along and for myself, just in case I forget things because my brain...

Well, without further ado; let's get started!

*This description is for Windows.*

### 1. Download and install [XAMPP](https://www.apachefriends.org/download.html)
In order to be able to serve the files locally you need to install [XAMPP](https://www.apachefriends.org/download.html): a program to run an Apache server already containing PHP and MySQL - making your life a lot easier.

### 2. Set up XAMPP
When the installation is finished run the program. It might give you some warnings about not running with administrator privileges. Fix this by opening the file location (Win10 tip: hit the windows key and type in XAMPP. Right click and select open in containing folder.) right click the file and select *Properties*, then go to the Compatibility tab and tick the box at the bottom of the window "Run this program as an administrator" and you won't have to worry about right clicking the file and select "Run as administrator" every time you want to open XAMPP.

You might also get warnings about the ports being in use if you have Skype running at the same time. Either change the settings of either Skype or XAMPP - or just close down Skype while you are using XAMPP, it'll let you focus better on your work anyway.

Next you just click the big red *X* in front of Apache and MySQL which will install these modules. Once they are installed you can go ahead and hit start on both - the order doesn't matter.

### 3. Get your WordPress files
The way to do this will depend on the hosting solution you are using. Either grab them by connecting via FTP or go through the control panel of your hosting service. Either way doesn't matter, you just need to get to your WordPress root folder (the one containing wp-content, wp-includes, wp-admin folders and index.php among others). This folder needs to be saved in the htdocs folder inside your XAMPP install directory (usually found under C:/xampp/). To check that your files have been saved to the right place try accessing http://localhost/folder_name it should display a database error message saying something like "Error establishing database connection". Don't worry, this will be fixed soon.

### 4. Get your site's database
Your database will not have been included in the files you downloaded. However, the information of where you can find it *is* contained in the "wp-config.php" file that can be found in the root of your WordPress folder. Open the file in your editor of choice and find the line that looks something like this:

{% highlight php %}

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'yourDatabaseNameHere');

{% endhighlight %}

Make note of the name of the database and leave the file open - you will use it again.

Now go to your hosting provider and login to phpMyAdmin. Again, the way to do this will differ depending on the provider you are using but it should be fairly straight forward. If not immediately obvious look for things like php, database and similar. That is how I found it in my provider.

When you have logged into phpMyAdmin look for the Export tab. Select the custom export method and select the database defined in the config file from before. Don't worry about the rest of the settings, just click "Go" and the database will be downloaded to your computer.

### 5. Import database to local server
Go to *http://localhost/* in your browser of choice and select phpMyAdmin from the menu (this time it's the local phpMyAdmin you are accessing). Click on the "Import" tab and select the file you just downloaded. You don't need to change anything else so just hit "Go" and the database should import. However, there is a chance that you get and error message saying something about the database file exceeding the max file size allowed. If you didn't get an error you can skip the block underneath.

> To fix the database file size error find the *php.ini* file located in the php folder inside the XAMPP root directory (c:/xampp) and open in editor of your choice. There are 3 things you should look for here:
>
> 1. upload_max_filesize
> 2. memory_limit
> 3. post_max_size
>
> Make sure that the value for *upload_max_filesize* is larger than the file you are going to upload. Next just check the other two values and make sure they are larger than the *upload_max_filesize* value. Next you will have to restart your server so go back to XAMPP and just stop and start Apache and MySQL then browse to *http://localhost/* again and try importing. It should work this time.

*Note: I also ran into some issues with SQL syntax errors that had their origin in an email subscription plugin I was using. To solve it I had to uninstall the plugin and drop the related tables from the database.*

### 6. Set up database
When the database has been imported go back to the first page of phpMyAdmin and click the "Databases" tab. Click on "Check Privileges" for your database and select "Add User" on the next screen.

Now you need to go back to the wp-config.php file we checked earlier and copy the values for *DB_USER* and *DB_PASSWORD*. For the host you can fill in *localhost*, then scroll to the bottom of the page and hit "Go".

*If you get an error message at this point just add the user without the password, then go to "User Accounts" and click "Edit Privileges" of the user you just created. From that screen tick all the boxes to give the user global privileges then select "Change password", type in the password twice and hit "Go".*

Now go back to the "Databases" tab and click the name of the database you imported. Inside the database look for the *wp-options* table or something similar (mine was called 0\_options). You need to edit the keys *siteurl* and *home*. Change the "option_value" of both keys to *http://localhost/yourfoldername/*.

Now try that in your browser. If you are still getting the database connection error try going back to your *wp-config.php* file and change the host to localhost - make sure to save the original value because you will need it when you go live again. Also remember to change it back when you go live. I tried different solutions but wasn't able to make it work any other way. If anyone has a better solution please let me know in the comments and I will update the post.

### Conclusion
Now you can start working on your site locally, back it up in a Github repo to be able to do version control and experiment away as much as you want without having to worry about breaking anything.

If you found this post useful, please let me know in the comments.