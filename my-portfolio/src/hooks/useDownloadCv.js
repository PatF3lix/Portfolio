const useDownloadCv = () => {
  const handleDownload = () => {
    const cvUrl = "/Patrick_Oliveira_CV_Dev.pdf";
    window.open(cvUrl, "_blank");
  };

  return {
    handleDownload,
  };
};

export default useDownloadCv;
