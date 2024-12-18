export const getVideoType = (url: string) => (url || "").split(".").pop();
