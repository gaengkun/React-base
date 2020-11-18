type AlertType = {
  status: boolean;
  title?: string;
  content?: string;
  renderType?: "TEXT" | "HTML";
  btn?: string;
  animation?: {
    from: "CENTER" | "LEFT" | "RIGHT" | "TOP" | "BOTTOM";
    sec?: number;
  };
};

type WarningType = {
  status: boolean;
  content?: string;
  renderType?: "TEXT" | "HTML";
  animation?: {
    sec?: number;
  };
  backgroundColor?: string;
  color?: string;
};
