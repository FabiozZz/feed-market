import classNames from "classnames";
import {cloneElement, useEffect, useState} from "react";

const GroupCheckbox = ({children, onClick, ...other}) => {

    let [content, setContent] = useState(children);
    let [checkboxes, setCheckboxes] = useState([]);
    useEffect(() => {
        let checkbox = [];
        content?.forEach((item, index) => {
            if (item?.type?.name === "Checkbox")
                checkbox.push(index);
        });
        let buf = content?.map((item, index) => {
            if (checkbox.includes(index)) {
                if (index === 0) {
                    return cloneElement(item, {...item.props, 'data-maingroup': true, key: index})
                } else {
                    return cloneElement(item, {...item.props, key: index})
                }
            } else {
                return item
            }
        });
        setContent(buf);
        setCheckboxes(checkbox)
    }, []);

    const clearCheckBox = (groupChecked) => {
        setContent('')
        let a = content.map((item, index) => {
            if (checkboxes.includes(index)) {
                if (index !== checkboxes[0]) {
                    console.log(item)
                    return cloneElement(item, {...item.props, checked: false, groupChecked: groupChecked});
                } else {
                    return item;
                }
            } else {
                return item
            }
        });
        setContent(a);
    };

    const ClickHandler = (e) => {
        if (onClick) {
            onClick(e);
        }

        let wrap = e.target.closest('label');
        if (wrap?.children[0].tagName === "INPUT") {
            let input = wrap.children[0]
            if (input.dataset.maingroup === 'true') {
                if (input.checked) {
                    clearCheckBox(true);
                } else {
                    clearCheckBox(false);
                }
            } else {
                clearCheckBox(false);
            }
        }
    }

  return(
      <div {...other} onClick={ClickHandler}>
          {content}
      </div>
  );
}

export default GroupCheckbox;