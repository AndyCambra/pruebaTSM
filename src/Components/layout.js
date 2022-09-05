import React, { useEffect } from 'react';
import useDrivePicker from "react-google-drive-picker";

const Layout = () => {
  const [openPicker, data, authResponse] = useDrivePicker();
  let token;
  const CLIENT_ID = '859115467840-7v8k4v3lvug8u33g6gqhrfd0q9ifr2v9.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyAJCjpO8KzCB-FcJ--tXHr24_u2jMmXgo8';

  const handleOpenPicker = () => {
    openPicker({
      clientId: CLIENT_ID,
      developerKey: API_KEY,
      viewId: "DOCS",
      token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
    });
  };

  useEffect(() => {
    // do anything with the selected/uploaded files
    if (data) {
      token = data
    }
  }, [data]);

  return (
    <div>
      <button onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
  );
}

export default Layout