type Method = "Query" | "Mutation" | string;
export type Resolver = {
  [key in Method]: {
    [key: string]: (
      parent: any,
      args: { [key: string]: any },
      context: {
        db: {
          events: Events;
          products: any;
        };
      },
      info: any
    ) => any;
  };
};
export type Event = {
  id: string;
  image_lg: string;
  image_main: string;
  image_md: string;
  image_thumb: string;
};
export type Events = Event[];
