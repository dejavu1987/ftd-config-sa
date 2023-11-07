import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useGeneralSettings } from '../hooks/UseGeneralSettings';
import { sendConfig } from './sendConfig';

const GeneralSettingsForm: React.FC = () => {
  const { handleSubmit, register, reset } = useForm();
  const { settings, updateGeneralSettings } = useGeneralSettings();

  useEffect(() => {
    reset(settings);
  }, [reset, settings]);

  const onSubmit = async (data: Record<string, string>) => {
    console.log(data);
    updateGeneralSettings(data);
    await sendConfig(new URLSearchParams(data).toString());
  };
  return (
    <div className="settings-form">
      <form method="post" id="generalconfig" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-sections-grid">
          <div className="form-section">
            <div className="title">
              <h4>Colors</h4>
            </div>

            <div className="form">
              <div className="form-field">
                <label htmlFor="menubuttoncolor">Menu Button Colour:</label>
                <input
                  id="menubuttoncolor"
                  {...register('menubuttoncolor')}
                  type="color"
                />
              </div>

              <div className="form-field">
                <label htmlFor="functionbuttoncolor">
                  Function Button Colour:
                </label>
                <input
                  id="functionbuttoncolor"
                  {...register('functionbuttoncolor')}
                  type="color"
                />
              </div>

              <div className="form-field">
                <label htmlFor="latchcolor">Latch Colour:</label>
                <input
                  id="latchcolor"
                  {...register('latchcolor')}
                  type="color"
                />
              </div>

              <div className="form-field">
                <label htmlFor="background">Background Colour:</label>
                <input
                  id="background"
                  {...register('background')}
                  type="color"
                />
              </div>
            </div>
          </div>
          <div className="form-section">
            <div className="title">
              <h4>Deep Sleep</h4>
            </div>

            <div className="form">
              <div className="form-field">
                <label htmlFor="sleepenable">Deep Sleep:</label>
                <select
                  className="sleepenable"
                  id="sleepenable"
                  {...register('sleepenable')}
                >
                  <option value="true">Enabled</option>
                  <option value="false">Disabled</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="sleeptimer">Deep Sleep Timer:</label>
                <select
                  className="sleeptimer"
                  id="sleeptimer"
                  {...register('sleeptimer')}
                >
                  <option value="10">10 Minutes</option>
                  <option value="20">20 Minutes</option>
                  <option value="30">30 Minutes</option>
                  <option value="60">60 Minutes</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-section">
            <div className="title">
              <h4>Sound</h4>
            </div>

            <div className="form">
              <div className="form-field">
                <label htmlFor="beep">Beep on Touch:</label>
                <select className="sleepenable" id="beep" {...register('beep')}>
                  <option value="true">Enabled</option>
                  <option value="false">Disabled</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-section">
            <div className="title">
              <h4>FreeTouchDeck Helpers</h4>
            </div>
            <div className="form">
              <div className="form-field">
                <label htmlFor="modifier1">Modifier 1:</label>
                <select
                  className="modifier1"
                  id="modifier1"
                  {...register('modifier1')}
                >
                  <option value="0">None</option>
                  <option value="128">CTRL</option>
                  <option value="129">SHIFT</option>
                  <option value="130">ALT</option>
                  <option value="131">GUI</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="modifier2">Modifier 2:</label>
                <select
                  className="modifier2"
                  id="modifier2"
                  {...register('modifier2')}
                >
                  <option value="0">None</option>
                  <option value="128">CTRL</option>
                  <option value="129">SHIFT</option>
                  <option value="130">ALT</option>
                  <option value="131">GUI</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="modifier3">Modifier 3:</label>
                <select
                  className="modifier3"
                  id="modifier3"
                  {...register('modifier3')}
                >
                  <option value="0">None</option>
                  <option value="128">CTRL</option>
                  <option value="129">SHIFT</option>
                  <option value="130">ALT</option>
                  <option value="131">GUI</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="helperdelay">Delay after helper (ms):</label>
                <select
                  className="helperdelay"
                  id="helperdelay"
                  {...register('helperdelay')}
                >
                  <option value="0">0</option>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="form">
          <input
            type="hidden"
            id="save"
            {...register('save')}
            value="general"
          />
          <br />
          <button
            className="button button--primary"
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
