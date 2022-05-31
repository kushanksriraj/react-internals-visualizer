type Fiber = {
  type: "fiber";
  subType: "node" | "root";
  uid: number;
};

type Primitive = null | undefined | string | number;
type Value = Fiber | Primitive;

type MessageCreateFiber = {
  type: "create-fiber";
  payload: {
    fiber: Fiber;
  };
};

type MessageUpdateFiber = {
  type: "update-fiber";
  payload: {
    fiber: Fiber;
    property: string;
    value: Value;
  };
};

type Rectangle = {
  type: "rectangle";
  pos: {
    x: number;
    y: number;
  };
  width: number;
  height: number;
};
