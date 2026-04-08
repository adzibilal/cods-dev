export const useHomePageData = () => {
  const { findOne } = useStrapiClient();
  
  return useAsyncData(
    "home-page-settings",
    () => findOne<any>("home-page-setting")
  );
};
