const copyToClipboard = (copyText) => {
  navigator.clipboard.writeText(copyText);
};

export default copyToClipboard;
