import "./App.css";
import Header from "./Header";
import Option from "./Option";
import ComputerIcon from "@material-ui/icons/Computer";
import DevicesOtherIcon from "@material-ui/icons/DevicesOther";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LanguageIcon from "@material-ui/icons/Language";
import LiveTvIcon from "@material-ui/icons/LiveTv";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Option
          Icon={ComputerIcon}
          title="System"
          text="Display, sound, power"
        />
        <Option
          Icon={DevicesOtherIcon}
          title="Devices"
          text="Bluetooth, printer, mouse"
        />
        <Option
          Icon={PhoneAndroidIcon}
          title="Phone"
          text="Link your Android, iPhone"
        />
        <Option
          Icon={LanguageIcon}
          title="Network & Internet"
          text="WiFi, airplane mode, VPN"
        />
        <Option
          Icon={LiveTvIcon}
          title="Personalization"
          text="background, lock screen, color"
        />
        <Option
          Icon={ComputerIcon}
          title="System"
          text="Display, sound, power"
        />
        <Option
          Icon={DevicesOtherIcon}
          title="Devices"
          text="Bluetooth, printer, mouse"
        />
        <Option
          Icon={PhoneAndroidIcon}
          title="Phone"
          text="Link your Android, iPhone"
        />
        <Option
          Icon={LanguageIcon}
          title="Network & Internet"
          text="WiFi, airplane mode, VPN"
        />
        <Option
          Icon={LiveTvIcon}
          title="Personalization"
          text="background, lock screen, color"
        />
        <Option
          Icon={ComputerIcon}
          title="System"
          text="Display, sound, power"
        />
        <Option
          Icon={DevicesOtherIcon}
          title="Devices"
          text="Bluetooth, printer, mouse"
        />
        <Option
          Icon={PhoneAndroidIcon}
          title="Phone"
          text="Link your Android, iPhone"
        />
        <Option
          Icon={LanguageIcon}
          title="Network & Internet"
          text="WiFi, airplane mode, VPN"
        />
        <Option
          Icon={LiveTvIcon}
          title="Personalization"
          text="background, lock screen, color"
        />
        <Option
          Icon={ComputerIcon}
          title="System"
          text="Display, sound, power"
        />
        <Option
          Icon={DevicesOtherIcon}
          title="Devices"
          text="Bluetooth, printer, mouse"
        />
        <Option
          Icon={PhoneAndroidIcon}
          title="Phone"
          text="Link your Android, iPhone"
        />
        <Option
          Icon={LanguageIcon}
          title="Network & Internet"
          text="WiFi, airplane mode, VPN"
        />
        <Option
          Icon={LiveTvIcon}
          title="Personalization"
          text="background, lock screen, color"
        />
      </div>
    </div>
  );
}

export default App;
