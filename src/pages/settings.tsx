import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t } = useTranslation();
 
  return (
    <section className="mt-8">
      <h3 className="section-title">{t("settings.title")}</h3>
      <p>{t("settings.language")}</p>
      <p>{t("settings.airdrop")}</p>
      <p>{t("settings.tutorial")}</p>
      <p>{t("settings.telegram_channel")}</p>
      <p>{t("settings.add_keys").toUpperCase()}</p>
    </section>
  );
}
