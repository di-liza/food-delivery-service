const regexPatterns = {
  name: /^[a-zA-Z0-9\s]{2,}$/,
  mail: /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
  phone: /^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/,
};

export default regexPatterns;
