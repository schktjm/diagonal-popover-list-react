import { Popover } from "../Popover";
import classes from "./PopoverList.module.css";

type Props = {
  items: string[];
};

export const PopoverList = ({ items }: Props) => {
  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {items.map((item, index) => (
          <li key={index} className={classes.item}>
            <Popover>
              {item}
              <Popover.Content>content - {item}</Popover.Content>
            </Popover>
          </li>
        ))}
      </ul>
    </div>
  );
};
