import { useEffect } from "react";

const UseTitle = titleName => {

  useEffect(() => {
    document.title = `TS | ${titleName}`
  }, [titleName])

};

export default UseTitle;