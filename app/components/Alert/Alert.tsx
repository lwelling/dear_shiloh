import React, { useEffect } from "react";
import { message } from "antd";

import type { AlertProps } from "~/types";

export const Alert: React.FC<AlertProps> = ({ type, content }) => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    // Check if content is not empty before triggering the message
    if (content) {
      switch (type) {
        case "success":
          messageApi.success(content);
          break;
        case "error":
          messageApi.error(content);
          break;
        case "info":
          messageApi.info(content);
          break;
        case "warning":
          messageApi.warning(content);
          break;
        default:
          break;
      }
    }
  }, [messageApi, type, content]);

  return <>{contextHolder}</>;
};
