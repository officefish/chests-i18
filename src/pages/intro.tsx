import { useTranslation } from "react-i18next";

export default function Intro() {
  const { t } = useTranslation();
 
  return (
    <section className="mt-8">
      <h3 className="section-title">{t("intro.title")}</h3>
      <p>{t("intro.loading")}</p>
      <p>{t("intro.hello_uppercase")}</p>
      <p>{t("intro.chests_description")}</p>
      <p>{t("intro.rewards_uppercase")}</p>
      <p>{t("intro.rewards_description")}</p>
      <p>{t("intro.invites_uppercase")}</p>
      <p>{t("intro.invites_description")}</p>
    </section>
  );
}
