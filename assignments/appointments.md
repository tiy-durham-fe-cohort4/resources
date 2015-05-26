# Appointments

This is an all-week assignment. Get started early, and make it awesome.

## The app

You are going to build a single page mobile application which manages
appointments, and shows the weather (temperature and sunny/cloudy/rainy/snowy)
for the time and place of the appointment.

## Wireframes

Here are the wireframes, as sketched with sharpie. These are just a conceptual
starting point. The features are bullet-pointed below in normal, hard, and
nightmare modes.

![Appointment List](https://github.com/tiy-durham-fe-2015/curriculum/raw/master/img/appointments/appointment-list.jpg)
![New Appointment](https://github.com/tiy-durham-fe-2015/curriculum/raw/master/img/appointments/appointment-new.jpg)
![Appointment Detail](https://github.com/tiy-durham-fe-2015/curriculum/raw/master/img/appointments/appointment-detail.jpg)
![Appointment Edit](https://github.com/tiy-durham-fe-2015/curriculum/raw/master/img/appointments/appointment-edit.jpg)

## Normal Mode

A quick note: *You won't be able to pull weather information until you learn
AJAX this Thursday!*

- single page application
- add appointment
  - title
  - street, city, state
  - date, time
- list appointments
- view appointment details full-screen (appointment detail)
  - in full-screen display, an appointment should show the weather
  - city, state, date and time should be taken into account when showing weather
- edit appointment
- delete appointment
  - styled confirmation prompt ('Are you sure you want to delete?' [Delete | Cancel])
- hide appointments that are more than 1 hr past
- persist appointments in local storage
- load appointments from local storage when app first loads
- clear past appointments (older than 7 days) out of local storage

## Hard mode

- detect a non-mobile browser, and show a "use this on mobile" screen
- form validation
  - http://happyjs.com/
  - http://parsleyjs.org/
  - ... or find another or roll your own
- show weather for place/time in list screen
- pretty dates 'n such using
  - http://momentjs.com/
- date/time picker
  - http://amsul.ca/pickadate.js/
  - ... or find another or roll your own
- search bar on list screen which filters appointments as you type
- Modify list view items based on whether they occur today, this week, or
further into the future
  - If the appointment is today, display only the time
    - e.g. 5:00 pm - Talk to Brad
  - If the appointment is this week, but not today,
    - Display: Mon, Tue, Wed, Thu, Fri, Sat, or Sun
    - e.g. Tue 5:00 pm - Talk to Brad
  - If the appointment is more than a week away,
    - Display: date and time
    - e.g. 2/23/15 5:00 pm - Talk to Brad

## Nightmare mode

- get current location from geo location api
  - http://www.w3schools.com/html/html5_geolocation.asp
- export to iCal format
  - https://github.com/nwcell/ics.js
- ability to auto fill city/state in by geolocation
  - Will probably require calling an API
- Show a small map (from Google, Bing, or elsewhere) for the appointment locale
- play a sound when an appointment is coming up
- Use client-side routing to support the browser's back button
  - rlite
  - davisjs
  - ... or find/roll your own
