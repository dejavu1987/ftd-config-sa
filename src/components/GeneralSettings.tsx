import React, { FormEventHandler } from 'react';
import './GeneralSettings.css';
import { ftdSaveConfigUrl } from '../Data';

const GeneralSettingsForm: React.FC = () => {
  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const formData = new URLSearchParams(
      // @ts-ignore
      new FormData(e.target as HTMLFormElement)
    );
    try {
      await fetch(ftdSaveConfigUrl, {
        method: 'POST',
        body: formData,
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
  return (
    <div className="settings-form">
      <div className="title">
        <h3>General Settings</h3>
      </div>

      <form method="post" id="generalconfig" onSubmit={handleSubmit}>
        <div className="title">
          <h2>Colors</h2>
        </div>

        <div className="form">
          <div className="form-field">
            <label htmlFor="menubuttoncolor">Menu Button Colour:</label>
            <input id="menubuttoncolor" name="menubuttoncolor" type="color" />
          </div>

          <div className="form-field">
            <label htmlFor="functionbuttoncolor">Function Button Colour:</label>
            <input
              id="functionbuttoncolor"
              name="functionbuttoncolor"
              type="color"
            />
          </div>

          <div className="form-field">
            <label htmlFor="latchcolor">Latch Colour:</label>
            <input id="latchcolor" name="latchcolor" type="color" />
          </div>

          <div className="form-field">
            <label htmlFor="background">Background Colour:</label>
            <input id="background" name="background" type="color" />
          </div>
        </div>

        <div className="title">
          <h2>Deep Sleep</h2>
        </div>

        <div className="form">
          <div className="form-field">
            <label htmlFor="sleepenable">Deep Sleep:</label>
            <select className="sleepenable" id="sleepenable" name="sleepenable">
              <option value="true">Enabled</option>
              <option value="false">Disabled</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="sleeptimer">Deep Sleep Timer:</label>
            <select className="sleeptimer" id="sleeptimer" name="sleeptimer">
              <option value="10">10 Minutes</option>
              <option value="20">20 Minutes</option>
              <option value="30">30 Minutes</option>
              <option value="60">60 Minutes</option>
            </select>
          </div>
        </div>

        <div className="title">
          <h2>Sound</h2>
        </div>

        <div className="form">
          <div className="form-field">
            <label htmlFor="beep">Beep on Touch:</label>
            <select className="sleepenable" id="beep" name="beep">
              <option value="true">Enabled</option>
              <option value="false">Disabled</option>
            </select>
          </div>
        </div>

        <div className="title">
          <h2>FreeTouchDeck Helpers</h2>
        </div>
        <div className="form">
          <div className="form-field">
            <label htmlFor="modifier1">Modifier 1:</label>
            <select className="modifier1" id="modifier1" name="modifier1">
              <option value="0">None</option>
              <option value="128">CTRL</option>
              <option value="129">SHIFT</option>
              <option value="130">ALT</option>
              <option value="131">GUI</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="modifier2">Modifier 2:</label>
            <select className="modifier2" id="modifier2" name="modifier2">
              <option value="0">None</option>
              <option value="128">CTRL</option>
              <option value="129">SHIFT</option>
              <option value="130">ALT</option>
              <option value="131">GUI</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="modifier3">Modifier 3:</label>
            <select className="modifier3" id="modifier3" name="modifier3">
              <option value="0">None</option>
              <option value="128">CTRL</option>
              <option value="129">SHIFT</option>
              <option value="130">ALT</option>
              <option value="131">GUI</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="helperdelay">Delay after helper (ms):</label>
            <select className="helperdelay" id="helperdelay" name="helperdelay">
              <option value="0">0</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
            </select>
          </div>
        </div>

        <div className="form">
          <input type="hidden" id="save" name="save" value="general" />
          <br />
          <button
            style={{ cursor: 'pointer' }}
            form="generalconfig"
            type="submit"
          >
            Save General Config
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralSettingsForm;
