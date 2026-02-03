import { personalData } from "@/data/personal";
import { Metadata } from "next";
import React from "react";
import AffiliationContent from "./AffiliationContent";

export const metadata: Metadata = {
  title: `Affiliations | ${personalData.name}`,
  description:
    "My professional career journey, work experiences, and company affiliations.",
};

const AffiliationPage: React.FC = () => {
  return <AffiliationContent />;
};

export default AffiliationPage;
