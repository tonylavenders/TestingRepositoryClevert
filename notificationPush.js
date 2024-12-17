console.log("NS Called");

// Function to display the soft popup
function showSoftPopup() {
  clevertap.notifications.push({
    titleText: "Would you like to receive Notification?",
    bodyText: "Will send you only trusted notifications and updates",
    okButtonText: "OK",
    rejectButtonText: "Cancel",
    okButtonColor: "#f28046",
    serviceWorkerPath: "/clevertap-web-integration/service-worker.js",
    okCallback: function () {
      console.log("For Soft OK Popup");
      clevertap.event.push("CT_Soft_OK_Click");
    },
    rejectCallback: function () {
      console.log("For Soft NO Popup");
      clevertap.event.push("CT_Soft_NO_Click");
    }
  });
}

// Show the hard popup first
Notification.requestPermission().then(function (permission) {
  if (permission === "granted") {
    console.log("Hard Popup Permission granted");
    clevertap.event.push("CT_Hard_Granted");
  } else if (permission === "denied") {
    console.log("Hard Popup Permission denied");
    clevertap.event.push("CT_Hard_Denied");
    showSoftPopup(); // Show the soft popup if denied
  } else {
    console.log("Hard Popup Permission dismissed");
    clevertap.event.push("CT_Hard_Dismissed");
    showSoftPopup(); // Show the soft popup if dismissed
  }
});
