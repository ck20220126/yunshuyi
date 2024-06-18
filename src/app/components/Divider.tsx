/** @jsxImportSource @emotion/react */
"use client";

import classNames from "classnames";

const Divider = (props: {
  color?: string
  highlightColor?: string
  className?: string;
}) => {
  const { color = '#EBECF0', highlightColor = '#1D5FFF' } = props || {}
  return <div className={classNames('divider w-full h-[1px] relative', props.className)} style={{ backgroundColor: color }}>
    <div className="w-[100px] h-full absolute left-0 top-0" style={{ backgroundColor: highlightColor }} />
  </div>;
};

export default Divider;
