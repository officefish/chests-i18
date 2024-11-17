import { useTranslation } from "react-i18next";

export default function Tasks() {
  const { t } = useTranslation();

  return (
    <section className="mt-8 ">
      <h3 className="section-title">{t("tasks.title")}</h3>
      <p>{t("tasks.login")}</p>
      <p>{t("tasks.login_description")}</p>
      <p>{t("tasks.open_chest")}</p>
      <p>{t("tasks.open_chest_description")}</p>
      <p>{t("tasks.make_transaction")}</p>
      <p>{t("tasks.make_transaction_description")}</p>
      <p>{t("tasks.connect_wallet")}</p>
      <p>{t("tasks.connect_wallet_description")}</p>
      <p>{t("tasks.share_story")}</p>
      <p>{t("tasks.share_story_description")}</p>
      <p>{t("tasks.daily_check_in")}</p>
      <p>{t("tasks.daily_check_in_description")}</p>
      <p>{t("tasks.invite_friends")}</p>
      <p>{t("tasks.invite_friends_description")}</p>
      <p>{t("tasks.bybit_registration")}</p>
      <p>{t("tasks.bybit_registration_description")}</p>
      <p>{t("tasks.bybit_validation")}</p>
      <p>{t("tasks.bybit_validation_description")}</p>
      <p>{t("tasks.bybit_deposit")}</p>
      <p>{t("tasks.bybit_deposit_description")}</p>
    
    </section>
  );
}
