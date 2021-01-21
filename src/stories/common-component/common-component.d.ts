type ScrollState = {
  page: number;
};

type ScrollAction = {
  type: "PAGE" | "INIT";
  data?: {
    page: number;
  };
};
