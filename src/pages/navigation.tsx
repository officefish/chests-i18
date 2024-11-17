import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation();
 
  return (
    <section className="mt-8">
      <h3 className="section-title">{t("navigation.title")}</h3>
      <p>{t("navigation.coins")}</p>
      <p>{t("navigation.usdt")}</p>
      <p>{t("navigation.keys")}</p>
      <p>{t("navigation.airdrop")}</p>
      <p>{t("navigation.game")}</p>
      <p>{t("navigation.tasks")}</p>
      <p>{t("navigation.friends")}</p>
    </section>
  );
}
