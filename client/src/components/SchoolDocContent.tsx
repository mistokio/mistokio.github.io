import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  className?: string;
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-2xl md:text-3xl font-bold text-foreground font-serif mt-10 mb-4">
      {children}
    </h3>
  );
}

export default function SchoolDocContent({ className }: Props) {
  const { t } = useLanguage();

  return (
    <div className={className}>
      <SectionTitle>{t("doc.history.title")}</SectionTitle>
      <div className="space-y-3 text-muted-foreground leading-relaxed">
        <p>{t("doc.history.p1")}</p>
        <p>{t("doc.history.p2")}</p>
        <p>{t("doc.history.p3")}</p>
        <p>{t("doc.history.p4")}</p>
      </div>

      <SectionTitle>{t("doc.groups.title")}</SectionTitle>
      <div className="space-y-3 text-muted-foreground leading-relaxed">
        <p>{t("doc.groups.p1")}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("doc.groups.p2")}</li>
          <li>{t("doc.groups.p3")}</li>
          <li>{t("doc.groups.p4")}</li>
        </ul>
        <p>{t("doc.groups.p5")}</p>
      </div>

      <SectionTitle>{t("doc.org.title")}</SectionTitle>
      <div className="space-y-3 text-muted-foreground leading-relaxed">
        <p>{t("doc.org.p1")}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("doc.org.nameHu")}</li>
          <li>{t("doc.org.nameEn")}</li>
          <li>{t("doc.org.nameJp")}</li>
          <li>{t("doc.org.email")}</li>
          <li>{t("doc.org.tax")}</li>
          <li>{t("doc.org.registry")}</li>
        </ul>
        <p>{t("doc.org.p2")}</p>
      </div>

      <SectionTitle>{t("doc.extra.title")}</SectionTitle>
      <div className="space-y-3 text-muted-foreground leading-relaxed">
        <p>{t("doc.extra.p1")}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("doc.extra.p2")}</li>
          <li>{t("doc.extra.p3")}</li>
        </ul>
        <p>{t("doc.extra.p4")}</p>
      </div>
    </div>
  );
}
