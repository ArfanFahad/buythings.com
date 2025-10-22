export const formatDateTime = (dateString) => {
  return new Date(dateString).toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    hour12: true,
  });
};
