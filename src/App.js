import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const clickme = () => {
    console.log(i18n.options.supportedLngs);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <div className="select">
            <select
              value={i18n.language}
              onChange={(e) =>
                i18n.changeLanguage(e.target.value)
              }
            >
              <option value="en">English</option>
              <option value="ar">عربي</option>
            </select>
          </div>

          <span>Translation text : {t('app_name')}</span>
          <div>
          <button title='supported lang' onClick={clickme}>Supported langs</button>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default App;
