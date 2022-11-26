import { ReactNode } from "react";

export type direction = "column" | "row";
export type transitionTime = number;
export type offset = number;
export type loop = boolean;
export type autoLoop = boolean;
export type autoTime = number;
export type position = "left" | "right";
export type children = ReactNode | ReactNode[];
export type child = React.ReactNode;

export interface SlideProps {
  children: children;
  loop?: loop;
  autoLoop?: autoLoop;
  autoTime?: autoTime;
  transitionTime?: transitionTime;
  direction?: direction;
  height?: number;
}

export interface SlideItemsProps {
  direction: direction;
  transitionTime: transitionTime;
  offset: offset;
  child: child;
}

export interface SlideButtonProps {
  direction: direction;
  position: position;
  children: React.ReactNode | JSX.Element;
  onClick: (position: position) => void;
}
