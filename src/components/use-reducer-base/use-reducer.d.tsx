type StateType = {
  first: number;
  second: string;
  third: boolean;
  list: Array<any>;
};

type ActionType = {
  type: "FIRST" | "SECOND" | "THIRD" | "LIST";
  data?: any;
};
