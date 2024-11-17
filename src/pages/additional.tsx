import { useTranslation } from "react-i18next";

export default function Additional() {
  const { t } = useTranslation();
 
  return (
    <section className="mt-8">
      <h3 className="section-title">{t("additional.title")}</h3>
      <p>{t("additional.next")}</p>
      <p>{t("additional.previous")}</p>
      <p>{t("additional.skip")}</p>
      <p>{t("additional.close")}</p>
      <p>{t("additional.claim")}</p>
    </section>
  );
}
