import * as React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CoreFeaturesSection from '@/components/CoreFeaturesSection';
import SupportedModelsSection from '@/components/SupportedModelsSection';
import WhyAskMultipleModelsSection from '@/components/WhyAskMultipleModelsSection';
import ProductMatrixSection from '@/components/ProductMatrixSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenLedger Studio | AI Assistant</title>
        <meta
          name="description"
          content="OpenLedger Studio - A private, multi-model AI experience with no account required to start."
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Header />

      <Box component="main" sx={{ backgroundColor: '#0A0C10', minHeight: '100vh' }}>
        <HeroSection />
        <CoreFeaturesSection />
        <SupportedModelsSection />
        <WhyAskMultipleModelsSection />
        <ProductMatrixSection />
      </Box>
    </>
  );
}
