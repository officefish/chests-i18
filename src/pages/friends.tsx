import { useTranslation } from "react-i18next";

export default function Friends() {
  const { t } = useTranslation();

  return (
    <section className="mt-8 ">
      <h3 className="section-title">{t("friends.title")}</h3>
      <p>{t("friends.invite").toUpperCase()}</p>
      <p>{t("friends.description")}</p>
      <p>{t("friends.telegram")}</p>
      <p>{t("friends.telegram_premium")}</p>
      <p>{t("friends.complex_baunty")}</p>
      <p>{t("friends.friends_list_label")}</p>
      <p>{t("friends.invite_friends").toUpperCase()}</p>
    </section>
  );
}
