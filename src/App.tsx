import { useTranslation } from "react-i18next";
import useLocalizeDocumentAttributes from "./i18n/useLocalizeDocumentAttributes";
import PageHeader from "./layout/PageHeader";
import Home from "./pages/home";
import Intro from "./pages/intro";
import Additional from "./pages/additional";
import Navigation from "./pages/navigation";
import Shop from "./pages/shop";
import Settings from "./pages/settings";
import Airdrop from "./pages/airdrop";
import Withdraw from "./pages/withdraw";
import Friends from "./pages/friends";
import Tasks from "./pages/tasks";

function App() {
  const { t } = useTranslation();

  useLocalizeDocumentAttributes();

  return (
    <div className="container mx-auto max-w-[95%] border-x border-dashed border-slate-600 bg-slate-950/70 px-4 md:max-w-[800px]">
      <PageHeader />

      <h2 className="pt-20 text-2xl font-semibold">
        {t("translating_text_title")}
      </h2>
      <Intro />
      <Additional />
      <Navigation />
      <Home />
      <Shop />
      <Settings />
      <Airdrop />
      <Withdraw />
      <Friends />
      <Tasks />
    <div className="h-20"></div>
      {/* <Interpolation />
      <hr />
      <Plurals />
      <hr />
      <Numbers />
      <hr />
      <Dates /> */}
    </div>
  );
}

export default App;
