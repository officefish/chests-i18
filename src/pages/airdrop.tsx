import { useTranslation } from "react-i18next";

export default function Airdrop() {
  const { t } = useTranslation();

  return (
    <section className="mt-8 ">
      <h3 className="section-title">{t("airdrop.title")}</h3>
      <p>{t("airdrop.description")}</p>
      <p>{t("airdrop.steps_list")}</p>
      <p>{t("airdrop.first_step")}</p>
      <p>{t("airdrop.connect_wallet")}</p>
      <p>{t("airdrop.second_step")}</p>
      <p>{t("airdrop.make_transaction")}</p>
      <p>{t("airdrop.third_step")}</p>
      <p>{t("airdrop.details_first_question")}</p>
      <p>{t("airdrop.details_first_answer_1")}</p>
      <p>{t("airdrop.details_first_answer_2")}</p>
      <p>{t("airdrop.details_first_answer_3")}</p>
      <p>{t("airdrop.details_second_question")}</p>
      <p>{t("airdrop.details_second_answer_1")}</p>
    
    </section>
  );
}
