import { toast } from 'react-toastify';
import { ftdSaveConfigUrl } from '../Data';
let toastReference = null;
export enum SendConfigRes {
  SUCCESS,
  FAIL,
  ERROR,
}
export const sendConfig = async (body: string): Promise<SendConfigRes> => {
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
      return SendConfigRes.SUCCESS;
    } else {
      // Request failed, handle the error here
      toast.error(
        'Error! Configuration could not be saved. ' + response.statusText,
        {
          autoClose: 5000, // Adjust the time to display the message as needed
        }
      );
      console.error('Request failed:', response.statusText);
      return SendConfigRes.FAIL;
    }
  } catch (error) {
    if (toastReference) {
      toast.dismiss(toastReference);
    }
    return SendConfigRes.ERROR;
  }
};
