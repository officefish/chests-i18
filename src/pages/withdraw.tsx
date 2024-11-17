import { useTranslation } from "react-i18next";

export default function Withdraw() {
  const { t } = useTranslation();

  return (
    <section className="mt-8">
      <h3 className="section-title">{t("withdraw.title")}</h3>
      <p>{t("withdraw.false_condition")}</p>
      <p>{t("withdraw.true_condition")}</p>
      <p>{t("withdraw.withdraw_steps")}</p>   
      <p>{t("withdraw.ammount")}</p>
    </section>
  );
}
