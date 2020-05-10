const reducerWord = desc => {
  if (desc.length > 15) {
    return `${desc.substring(0, 15)}...`;
  }
  return desc;
};

export default reducerWord;
