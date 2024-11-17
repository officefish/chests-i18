import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="mt-8 ">
      <h3 className="section-title">{t("home.title")}</h3>
      <p>{t("home.find_prize").toUpperCase()}</p>
      <p>{t("home.available_types")}</p>
      <p>{t("home.keys")}</p>
      <p>{t("home.new_key")}</p>
      <p>{t("home.open_box").toUpperCase()}</p>
      <p>{t("home.click_on_box").toUpperCase()}</p>
      <p>{t("additional.claim").toUpperCase()}</p>
      <p>{t("home.to_reward").toUpperCase()}</p>
      <p>{t("home.mo_keys").toUpperCase()}</p>
      <p>{t("home.reward_description")}</p>
      <p>{t("home.unique")}</p>
      <p>{t("home.rare")}</p>
      <p>{t("home.basic")}</p>
      <p>{t("home.coins")}</p>
      <p>{t("home.usdt")}</p>
      <p>{t("home.reopen")}</p>
    </section>
  );
}
