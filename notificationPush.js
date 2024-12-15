console.log("NS Called");
clevertap.notifications.push({
  titleText: "Would you like to receive Notification?",
  bodyText: "Will send you only trusted notifcations and updates",
  okButtonText: "OK",
  rejectButtonText: "Cancel",
  okButtonColor: "#f28046",
  serviceWorkerPath: "/clevertap-web-integration/service-worker.js",
  okCallback: function () {
    console.log("For Soft OK Popup");
    Notification.requestPermission().then(function (getperm) {
      console.log("Hard Popup Permission granted", getperm);
      // window.location.reload();
    });
    // clevertap.event.push("CT_OK_Click");
  },
  rejectCallback: function () {
    console.log("For Soft NO Popup");
    // clevertap.event.push("CT_NO_Click");
  },
  subscriptionCallback: function () {
    console.log("For Chrome Hard Popup");
    // clevertap.event.push("Chrome_Yes_Click");
  },
});
