import dynamic from "next/dynamic";
import Intro from "./components/intro";
import Features from "./components/Features";

export default function Home() {

  const CategoriesRender = dynamic(() => import('./components/Categories'))
  const FeaturesRender = dynamic(() => import('./components/FeaturesFixed'))
  const StoriesRender = dynamic(() => import('./components/Stories'))
  const StatisticRender = dynamic(() => import('./components/Statistic'))
  const SupplierRender = dynamic(() => import('./components/Supplier'))

  return (
    <main className="container mx-auto w-full overflow-hidden relative">
      <Intro />
      <CategoriesRender />
      <FeaturesRender />
      <StatisticRender />
      <SupplierRender />
      <StoriesRender />
    </main>
  );
}
