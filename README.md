# irctc
This is a project made by me for a hackathon organized by pepcoding education pvt ltd. 

The problem this project is targeted to solve is to automate the booking of train tickets on irctc.co.in, especially the tatkal tickets, whose bookings are to be made just one day before the reservation, starting at 10:00am sharp for non-ac classes and 11:00am sharp for ac classes. Many such tickets get over within few minutes. 

Using this project, the bookings can be done automatically within two minutes. Just a captcha for login and another for payment and the final OTP for payment has to be entered manually.

The inputs that need to be given in the format mentioned in the code are userid, password, codes of source and destination railway stations, date and class of reservation, type of ticket i.e. tatkal or not, names of passengers, address, PIN code, post office name as in the irctc website and mobile number both for booking and payment by upi. The details of passengers like name, age, gender, berth preference, identity card and number need to be entered beforehand in the masterlist of account/profile in the irctc android/ios app.

I have written the code in asynchronous javascript and used puppeteer library of node js which provides APIs to control chrome browser. I have also used xpath and jquery to traverse the DOM trees to select and click on the train and class from the tables and to select the options of name and post office.



