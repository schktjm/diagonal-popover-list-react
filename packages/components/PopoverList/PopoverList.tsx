import { useState } from "react";
import { Popover } from "../Popover";
import classes from "./PopoverList.module.css";

type Props = {
  items: string[];
};

export const PopoverList = ({ items }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {items.map((item, index) => (
          <li key={index} className={classes.item}>
            <Popover onClick={() => setIsExpanded((pre) => !pre)}>
              {item}
              <Popover.Content>content - {item}</Popover.Content>
            </Popover>
          </li>
        ))}
      </ul>
    </div>
  );
};
