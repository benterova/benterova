export const scrollToBottom = async (node) => {
  node.scroll({ top: node.scrollHeight, behavior: "smooth" });
};
