/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async";
import ErrorBoundary from "../ui/ErrorBoundary";

const SEO = ({ pageTitle }: any) => {
  return (
    <ErrorBoundary>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle} - SMP Muhammadiyah 2 Taman</title>
        <meta name="author" content="Ishlah Rizky Darmawan" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="SPMB SMP Muhammadiyah 2 Taman" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
    </ErrorBoundary>
  );
};

export default SEO;