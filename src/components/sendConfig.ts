import { toast } from 'react-toastify';
import { ftdSaveConfigUrl } from '../Data';
let toastReference = null;
export const sendConfig = async (body: string) => {
  toastReference = toast.info('Saving configuration', {
    autoClose: false, // Disable auto-closing
    closeButton: false,
    progress: 0.3,
  });

  try {
    const response = await fetch(ftdSaveConfigUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });
    if (toastReference) {
      toast.dismiss(toastReference);
    }
    if (response.ok) {
      // Request was successful, show the success message using React-Toastify
      toast.success('Success! Configuration has been saved.', {
        autoClose: 5000, // Adjust the time to display the message as needed
      });
    } else {
      // Request failed, handle the error here
      toast.error(
        'Error! Configuration could not be saved. ' + response.statusText,
        {
          autoClose: 5000, // Adjust the time to display the message as needed
        }
      );
      console.error('Request failed:', response.statusText);
    }
  } catch (error) {
    if (toastReference) {
      toast.dismiss(toastReference);
    }
    // Handle network errors here
    toast.error('Error! an unexpected error occured.' + JSON.stringify(error), {
      autoClose: 5000, // Adjust the time to display the message as needed
    });
    console.error('Network error:', error);
  }
};
