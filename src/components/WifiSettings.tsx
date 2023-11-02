import React, { useEffect } from 'react';
import { ftdSaveConfigUrl } from '../Data';
import { useForm } from 'react-hook-form';

const WiFiSettingsForm: React.FC = () => {
  const { handleSubmit, register, reset } = useForm<Record<string, string>>();
  useEffect(() => {
    const savedSettings = localStorage.getItem('ftd.wifiSettings');
    if (savedSettings) {
      reset(JSON.parse(savedSettings));
    }
  }, [reset]);

  const sendToFTD = async (data: string) => {
    try {
      await fetch(ftdSaveConfigUrl, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    } catch (e) {
      console.log('err', e);
      alert(
        'Error saving settings! Make sure your FTD is in config mode and connected to your WiFi'
      );
    }
  };

  const onSubmit = async (data: Record<string, string>) => {
    localStorage.setItem('ftd.wifiSettings', JSON.stringify(data));
    await sendToFTD(new URLSearchParams(data).toString());
  };

  return (
    <div id="wifi" className="settings-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <div className="form-field">
            <label htmlFor="ssid">WiFi SSID:</label>
            <input type="text" id="ssid" {...register('ssid')} />
          </div>
          <div className="form-field">
            <label htmlFor="password">WiFi Password:</label>
            <input
              type="password"
              id="password"
              {...register('password')}
              autoComplete="new-password"
            />
          </div>
          <div className="form-field">
            <label htmlFor="showpassword">Show Password</label>
            <input
              id="showpassword"
              {...register('showpassword')}
              type="checkbox"
              onClick={togglePassword}
            />
          </div>
          <div className="form-field">
            <label htmlFor="wifimode">WiFi Mode:</label>
            <select
              className="wifimode"
              id="wifimode"
              {...register('wifimode')}
            >
              <option value="WIFI_STA">Station</option>
              <option value="WIFI_AP">Access Point</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="wifihostname">WiFi Hostname:</label>
            <input
              type="text"
              id="wifihostname"
              {...register('wifihostname')}
            />
          </div>
          <div className="form-field">
            <label htmlFor="attempts">Connection attempts:</label>
            <select
              className="attempts"
              id="attempts"
              {...register('attempts')}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="attemptdelay">Delay between attempts:</label>
            <select
              className="attemptdelay"
              id="attemptdelay"
              {...register('attemptdelay')}
            >
              <option value="100">100 ms</option>
              <option value="500">500 ms</option>
              <option value="1000">1000 ms</option>
              <option value="2000">2000 ms</option>
            </select>
          </div>
          <div className="form">
            <input type="hidden" id="save" {...register('save')} value="wifi" />
            <button className="button button--primary" type="submit">
              Save WiFi Config
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

function togglePassword() {
  // Implement the togglePassword function here
}

export default WiFiSettingsForm;
