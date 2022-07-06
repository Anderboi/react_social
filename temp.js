const jewels = (j, s) => {
  const jewels = [];

  j.split("").forEach((element) => {
    s.split("").filter((x) => {
      if (element === x) {
        jewels.push(element);
      }
      return jewels;
    });
  });
  console.log(jewels.length);
  return jewels.length;
};

jewels("ab", "aabbccd");
