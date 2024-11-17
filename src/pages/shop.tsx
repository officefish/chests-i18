import { useTranslation } from "react-i18next";

export default function Shop() {
  const { t } = useTranslation();
 
  return (
    <section className="mt-8">
      <h3 className="section-title">{t("shop.title")}</h3>
      <p>{t("shop.description")}</p>
    </section>
  );
}
